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
  const [iframeSrc, setIframeSrc] = useState<string | null>(null);

  useEffect(() => {
    const decodedHtml = decodeString(encodedHtml);
    const decodedJs = decodeString(encodedJs);
    const wrappedJs = `
      (function() {
        // Clear any existing globals
        Object.keys(window).forEach(key => {
          if (!['document', 'location', 'navigator'].includes(key)) {
            delete window[key];
          }
        });

        // Disable cookie access
        Object.defineProperty(document, 'cookie', {
        get: function() { return ''; },
        set: function() { return true; }
        });

        // Restrict access to parent window
        window.parent = null;
        window.top = null;

        // Disable potentially dangerous APIs
        delete window.XMLHttpRequest;
        delete window.fetch;
        delete window.WebSocket;

        // Attempt to detect and disable extension content scripts
        if (window.chrome && window.chrome.runtime) {
        delete window.chrome.runtime;
        }

        console.log("iframe window",'ethereum' in window)

        // Your original JS code
        ${decodedJs}
      })();
    `;

    const fullHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline';">
        </head>
        <body>
          ${decodedHtml}
          <script>${wrappedJs}</script>
        </body>
      </html>
    `;

    const blob = new Blob([fullHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    setIframeSrc(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [encodedHtml, encodedJs]);

  return (
    <iframe
      ref={iframeRef}
      sandbox="allow-scripts"
      src={iframeSrc || ''}
      title="Dynamic Visualization"
      width="100%"
      height="500px"
      style={{ border: 'none' }}
    />
  );
};

export default CodegenVis;
