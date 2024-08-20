import * as GaussianSplats3D from '@mkkellogg/gaussian-splats-3d';
import { useEffect, useRef } from 'react';

export default function GaussianSplatViewer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('Effect running, containerRef:', containerRef.current);
    if (!containerRef.current) {
      console.error('Container ref is null');
      return;
    }

    const viewer = new GaussianSplats3D.Viewer({
      cameraUp: [0, 1, 0],
      initialCameraPosition: [10, 10, 10],
      initialCameraLookAt: [0, 0, 0],
      canvas: containerRef.current,
      sharedMemoryForWorkers: false,
    });

    const s3Url = 'https://dojo-files-dev.tensorplex.dev/donald_duck.ply';
    // const s3Url = 'https://dojo-files-dev.tensorplex.dev/miniature_godzilla_with_a_blue_skin_and_a_green_face.ply';

    viewer
      .addSplatScene(s3Url, {
        format: GaussianSplats3D.SceneFormat.PLY,
        splatAlphaRemovalThreshold: 5,
        showLoadingUI: true,
        // position: [0, 0, 0],
        // rotation: [0, 0, 0, 1],
        scale: [5, 5, 5],
      })
      .then(() => {
        console.log('Splat scene loaded successfully');
        viewer.start();
      })
      .catch((error: Error) => {
        console.error('Error loading splat scene:', error);
      });

    // return () => {
    //   // Clean up the viewer if necessary
    //   //   viewer.dispose();
    // };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
}
