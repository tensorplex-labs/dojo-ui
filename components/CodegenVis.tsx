import { useEffect, useRef, useState } from 'react';
const decodeString = (encodedString: string): string => {
  return encodedString
    .replace(/\\u003c/g, '<')
    .replace(/\\u003e/g, '>')
    .replace(/\\n/g, '\n')
    .replace(/\\"/g, '"');
};

interface CodegenVisProps {
  encodedHtml: string;
  encodedJs: string;
}

const CodegenVis = ({ encodedHtml, encodedJs }: CodegenVisProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeKey, setIframeKey] = useState(0);
  useEffect(() => {
    console.log('parent window', 'ethereum' in window);
    const decodedHtml = decodeString(encodedHtml);
    const decodedJs = decodeString(encodedJs);

    const wrappedJs = `
      (function() {
      console.log("Iframe window:", 'ethereum' in window);
        // Clear any existing globals
        Object.keys(window).forEach(key => {
          if (!['document', 'location', 'navigator'].includes(key)) {
            delete window[key];
          }
        });

        // Your original JS code
        ${decodedJs}
      })();
    `;

    const fullHtml = decodedHtml.replace(/<script[\s\S]*?<\/script>/i, `<script>${wrappedJs}</script>`);
    if (iframeRef.current) {
      const doc = iframeRef.current.contentDocument;
      if (doc) {
        doc.open();
        doc.write(fullHtml);
        doc.close();
      }
    }
  }, []);

  return (
    <iframe
      key={iframeKey}
      ref={iframeRef}
      sandbox="allow-scripts allow-same-origin"
      title="Dynamic Visualization"
      width="100%"
      height="500px"
      style={{ border: 'none' }}
    />
  );
};

export default CodegenVis;
