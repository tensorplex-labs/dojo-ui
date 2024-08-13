import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader.js';

const PlyVisualizer: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Set up camera position
    camera.position.z = 5;

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);

    // Add axes helper
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    // Load and add PLY model
    const loadPlyFromS3 = async () => {
      try {
        const s3Url = 'https://dojo-files-dev.tensorplex.dev/green_dog1.ply';
        const response = await axios.get(s3Url, { responseType: 'arraybuffer' });
        const arrayBuffer = response.data;

        const loader = new PLYLoader();
        const geometry = loader.parse(arrayBuffer);
        // Check if the geometry contains color data
        const hasColorData = geometry.attributes.color !== undefined;
        console.log('PLY file contains color data:', hasColorData);

        geometry.computeVertexNormals();

        const material = new THREE.PointsMaterial({
          size: 0.005,
          vertexColors: hasColorData,
          //   transparent: true,
          //   alphaTest: 0.5,
        });

        if (!hasColorData) {
          // If no color data, set a default color
          material.color.setHex(0x00ff00); // Green color
        }

        const pointCloud = new THREE.Points(geometry, material);
        scene.add(pointCloud);

        // Center the point cloud
        const box = new THREE.Box3().setFromObject(pointCloud);
        const center = box.getCenter(new THREE.Vector3());
        pointCloud.position.sub(center);

        // Adjust camera position based on bounding box
        const boxSize = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(boxSize.x, boxSize.y, boxSize.z);
        camera.position.set(0, 0, maxDim * 2);
        camera.lookAt(scene.position);

        controls.target.copy(center);
        controls.update();
      } catch (error) {
        console.error('Error loading PLY file from S3:', error);
        setError('Failed to load 3D model');
      }
    };

    loadPlyFromS3();

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default PlyVisualizer;
