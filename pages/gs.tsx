import useGaussianSplatViewer from '@/hooks/useGaussianViewer';

export const s3Url = 'https://dojo-files-dev.tensorplex.dev/donald_duck.ply';
export const s3Url2 = 'https://dojo-files-dev.tensorplex.dev/miniature_godzilla_with_a_blue_skin_and_a_green_face.ply';
const prop = {
  encodedHtml:
    '\u003c!DOCTYPE html\u003e\n\u003chtml\u003e\n\u003chead\u003e\n  \u003ctitle\u003e3D Cube Visualization\u003c/title\u003e\n  \u003cstyle\u003e\n    body {\n      margin: 0;\n      overflow: hidden;\n    }\n    \n    #container {\n      width: 100%;\n      height: 100vh;\n      perspective: 800px;\n    }\n\n    #cube {\n      position: relative;\n      width: 200px;\n      height: 200px;\n      margin: 100px auto;\n      transform-style: preserve-3d;\n    }\n\n    .face {\n      position: absolute;\n      width: 200px;\n      height: 200px;\n      opacity: 0.8;\n    }\n\n    #front {\n      background-color: red;\n      transform: translateZ(100px);\n    }\n\n    #back {\n      background-color: green;\n      transform: translateZ(-100px) rotateY(180deg);\n    }\n\n    #right {\n      background-color: blue;\n      transform: rotateY(-90deg) translateZ(100px);\n    }\n\n    #left {\n      background-color: yellow;\n      transform: rotateY(90deg) translateZ(100px);\n    }\n\n    #top {\n      background-color: purple;\n      transform: rotateX(-90deg) translateZ(100px);\n    }\n\n    #bottom {\n      background-color: orange; \n      transform: rotateX(90deg) translateZ(100px);\n    }\n\n    select {\n      position: absolute;\n      top: 10px;\n      left: 10px;\n    }\n  \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n  \u003cdiv id="container"\u003e\n    \u003cdiv id="cube"\u003e\n      \u003cdiv id="front" class="face"\u003e\u003c/div\u003e\n      \u003cdiv id="back" class="face"\u003e\u003c/div\u003e\n      \u003cdiv id="right" class="face"\u003e\u003c/div\u003e\n      \u003cdiv id="left" class="face"\u003e\u003c/div\u003e\n      \u003cdiv id="top" class="face"\u003e\u003c/div\u003e\n      \u003cdiv id="bottom" class="face"\u003e\u003c/div\u003e\n    \u003c/div\u003e\n  \u003c/div\u003e\n\n  \u003cselect id="colorSelect"\u003e\n    \u003coption value="red"\u003eRed\u003c/option\u003e\n    \u003coption value="green"\u003eGreen\u003c/option\u003e\n    \u003coption value="blue"\u003eBlue\u003c/option\u003e\n    \u003coption value="yellow"\u003eYellow\u003c/option\u003e\n    \u003coption value="purple"\u003ePurple\u003c/option\u003e\n    \u003coption value="orange"\u003eOrange\u003c/option\u003e\n  \u003c/select\u003e\n\n  \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
  encodedJs:
    "const cube = document.getElementById('cube');\nconst faces = document.querySelectorAll('.face');\nconst colorSelect = document.getElementById('colorSelect');\n\nlet isDragging = false;\nlet startX, startY;\nlet currentX = 0, currentY = 0;\n\ncolorSelect.addEventListener('change', function() {\n  const selectedColor = this.value;\n  faces.forEach(face =\u003e face.style.backgroundColor = selectedColor);\n});\n\ncube.addEventListener('mousedown', startDragging);\ndocument.addEventListener('mousemove', drag);\ndocument.addEventListener('mouseup', stopDragging);\ndocument.addEventListener('mouseleave', stopDragging);\n\nfunction startDragging(event) {\n  isDragging = true;\n  startX = event.clientX;\n  startY = event.clientY;\n}\n\nfunction drag(event) {\n  if (!isDragging) return;\n  \n  const deltaX = event.clientX - startX;\n  const deltaY = event.clientY - startY;\n  \n  currentX += deltaY;\n  currentY += deltaX;\n  \n  cube.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;\n  \n  startX = event.clientX;\n  startY = event.clientY;\n}\n\nfunction stopDragging() {\n  isDragging = false;\n}",
};
const GS = () => {
  const { containerRef: cr1, ready: r1 } = useGaussianSplatViewer(s3Url);
  const { containerRef: cr2, ready: r2 } = useGaussianSplatViewer(s3Url2);
  const { containerRef: cr3, ready: r3 } = useGaussianSplatViewer(s3Url2);
  // const { containerRef: cr4, ready: r4 } = useGaussianSplatViewer(s3Url);

  return (
    <div id="parentContainer" className="grid grid-cols-2 text-black">
      <div ref={cr1} className="size-[200px]" style={{ visibility: r1 ? 'visible' : 'hidden' }} />
      <div ref={cr2} className="size-[200px]" style={{ visibility: r2 ? 'visible' : 'hidden' }} />
      <div ref={cr3} className="size-[200px]" style={{ visibility: r3 ? 'visible' : 'hidden' }} />
      {/* <div ref={cr4} className="size-[200px]" style={{ visibility: r4 ? 'visible' : 'hidden' }} /> */}
      {/* <CodegenVis {...prop} /> */}
    </div>
  );
};

export default GS;
