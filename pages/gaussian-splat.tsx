import dynamic from 'next/dynamic';

const GaussianSplatViewer = dynamic(() => import('@/components/GaussianSplatViewer'), { ssr: false });

export default function GaussianSplatPage() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0 }}>
      <GaussianSplatViewer />
    </div>
  );
}
