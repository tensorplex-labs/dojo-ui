import React, { useEffect, useRef, useState } from 'react';

const IframeSecurityTest: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [parentResults, setParentResults] = useState<string>('');
  const [iframeResults, setIframeResults] = useState<string>('');

  useEffect(() => {
    // Test access in parent window
    const cookiesAccessible = navigator.cookieEnabled;
    const extensionsAccessible = 'chrome' in window && 'extension' in (window as any).chrome;

    setParentResults(`
      Parent window:
      Cookies accessible: ${cookiesAccessible}
      Extensions accessible: ${extensionsAccessible}
      Others: ${'ethereum' in window}
    `);
    console.log('Parent window:', window);
    console.log('chrome :', 'ethereum' in (window as any).chrome);
    // Set up listener for iframe messages
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'TEST_RESULTS') {
        setIframeResults(event.data.results);
      }
    };

    window.addEventListener('message', handleMessage);

    // Inject test script into iframe
    if (iframeRef.current) {
      const doc = iframeRef.current.contentDocument;
      if (doc) {
        doc.open();
        doc.write(`
          <html>
            <body>
              <script>
              console.log("Iframe window:", window);
                try {
                  const cookiesAccessible = navigator.cookieEnabled;
                  const extensionsAccessible = 'chrome' in window && 'extension' in window.chrome;
                  
                  const results = \`
                    Iframe:
                    Cookies accessible: \${cookiesAccessible}
                    Extensions accessible: \${extensionsAccessible}
                    Others: \${'ethereum' in window}
                  \`;
                  window.parent.postMessage({ type: 'TEST_RESULTS', results }, '*');
                } catch (error) {
                  window.parent.postMessage({ type: 'TEST_RESULTS', results: 'Error: ' + error.message }, '*');
                }
              </script>
            </body>
          </html>
        `);
        doc.close();
      }
    }

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div className="text-black">
      <h2>Iframe Security Test</h2>
      <pre>{parentResults}</pre>
      <pre>{iframeResults}</pre>
      <iframe ref={iframeRef} style={{ display: 'none' }} title="Security Test"></iframe>
    </div>
  );
};

export default IframeSecurityTest;
