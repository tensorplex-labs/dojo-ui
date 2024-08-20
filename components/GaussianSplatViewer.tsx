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
      cameraUp: [0, -1, -0.6],
      initialCameraPosition: [-1, -4, 6],
      initialCameraLookAt: [0, 4, 0],
      canvas: containerRef.current,
    });

    viewer
      .addSplatScene('/donald_duck.ply', {
        splatAlphaRemovalThreshold: 5,
        showLoadingUI: true,
        position: [0, 1, 0],
        rotation: [0, 0, 0, 1],
        scale: [1.5, 1.5, 1.5],
      })
      .then(() => {
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
