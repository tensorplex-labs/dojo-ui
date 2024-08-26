import useGaussianSplatViewer from '@/hooks/useGaussianViewer';
export const s3Url = 'https://dojo-files-dev.tensorplex.dev/donald_duck.ply';
export const s3Url2 = 'https://dojo-files-dev.tensorplex.dev/miniature_godzilla_with_a_blue_skin_and_a_green_face.ply';
const GS = () => {
  const { containerRef: cr1, ready: r1 } = useGaussianSplatViewer(s3Url);
  const { containerRef: cr2, ready: r2 } = useGaussianSplatViewer(s3Url2);
  const { containerRef: cr3, ready: r3 } = useGaussianSplatViewer(s3Url2);
  const { containerRef: cr4, ready: r4 } = useGaussianSplatViewer(s3Url);

  return (
    <div id="parentContainer" className="grid grid-cols-2">
      <div ref={cr1} className="size-[200px]" style={{ visibility: r1 ? 'visible' : 'hidden' }} />
      <div ref={cr2} className="size-[200px]" style={{ visibility: r2 ? 'visible' : 'hidden' }} />
      <div ref={cr3} className="size-[200px]" style={{ visibility: r3 ? 'visible' : 'hidden' }} />
      <div ref={cr4} className="size-[200px]" style={{ visibility: r4 ? 'visible' : 'hidden' }} />
    </div>
  );
};

export default GS;
