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

    // PNG texture
    // const textureLoader = new THREE.TextureLoader();
    // const texture = textureLoader.load(
    //   '/green_dog1.png', // Adjust path as needed
    //   undefined,
    //   undefined,
    //   (error) => console.error('Error loading texture:', error)
    // );

    // Create video element and load MP4
    const video = document.createElement('video');
    video.src = '/green_dog1.mp4'; // Adjust path as needed
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.play();

    // Create video texture
    const videoTexture = new THREE.VideoTexture(video);
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    videoTexture.format = THREE.RGBFormat;

    // Load environment texture
    // const textureLoader = new THREE.TextureLoader();
    // const envTexture = textureLoader.load('/green_dog1.png', () => {
    //   envTexture.mapping = THREE.EquirectangularReflectionMapping;
    //   scene.background = envTexture;
    //   scene.environment = envTexture;
    // });

    // Load and add PLY model
    const loader = new PLYLoader();
    loader.load(
      '/green_dog1.ply', // Replace with your PLY file path
      (geometry) => {
        geometry.computeVertexNormals();

        const material = new THREE.PointsMaterial({
          size: 0.005,
          vertexColors: true,
          map: videoTexture,
          transparent: true,
          alphaTest: 0.5,
        });
        // // const material = new THREE.MeshStandardMaterial({
        // //   color: 0xffffff,
        // //   metalness: 0.5,
        // //   roughness: 0.1,
        // //   envMap: envTexture,
        // //   side: THREE.DoubleSide,
        // // });
        const pointCloud = new THREE.Points(geometry, material);
        scene.add(pointCloud);

        // // Try different materials
        // const materials = [
        //   new THREE.PointsMaterial({ size: 0.01, color: 0xff0000 }), // Red points
        //   new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true }), // Green wireframe
        //   new THREE.MeshPhongMaterial({ color: 0x0000ff }), // Blue phong material
        // ];

        // materials.forEach((material, index) => {
        //   let object;
        //   if (material instanceof THREE.PointsMaterial) {
        //     object = new THREE.Points(geometry, material);
        //   } else {
        //     object = new THREE.Mesh(geometry, material);
        //   }
        //   object.position.x = index * 2 - 2; // Spread objects horizontally
        //   scene.add(object);
        // });

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
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        console.error('An error occurred while loading the PLY file:', error);
      }
    );

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
