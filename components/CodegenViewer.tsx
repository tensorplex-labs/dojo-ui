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
}

const decodedCSP = `<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline' https://cdnjs.cloudflare.com; style-src 'unsafe-inline'; img-src data: blob: https://threejsfundamentals.org; connect-src 'none'; form-action 'none'; base-uri 'none';">`;

const decodedJsSecurity = `
      (function() {
        // Clear any existing globals if want to be eeven more finegrained. but some prompt response may fail to run
        // Object.keys(window).forEach(key => {
        //   if (!['document', 'location', 'navigator','setInterval'].includes(key)) {
        //     delete window[key];
        //   }
        // });

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

        // Restrict access to sensitive globals
        const restrictedGlobals = ['localStorage', 'sessionStorage', 'indexedDB', 'webkitIndexedDB', 'mozIndexedDB', 'msIndexedDB'];
        restrictedGlobals.forEach(prop => {
            Object.defineProperty(window, prop, {
                get: function() { return 'Access denied'; },
                set: function() { return 'Access denied'; }
            });
        });

        // console.log("iframe eth in window",'ethereum' in window)
        // console.log("iframe has cookies",!!document.cookie)
        // console.log("iframe has localstorage",localStorage)
      })();
    `;

const CodegenViewer = ({ encodedHtml }: CodegenVisProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeSrc, setIframeSrc] = useState<string | null>(null);
  const [urlString, setUrlString] = useState('');
  useEffect(() => {
    // console.log('parent eth in window', 'ethereum' in window);
    // console.log('parent has cookies', !!document.cookie);
    // console.log('parent has localstorage', localStorage);
    let url = '';
    try {
      const decodedHtml = decodeString(encodedHtml);
      const blob = new Blob(
        [
          decodedHtml
            .replace(/<head>/, `<head>${decodedCSP}`)
            .replace(/<script>/, `<script>${decodedJsSecurity}</script><script>`),
        ],
        { type: 'text/html' }
      );
      url = URL.createObjectURL(blob);
      setIframeSrc(url);
      setUrlString(url);
    } catch (err) {}
    return () => {
      url && URL.revokeObjectURL(url);
      setUrlString('');
    };
  }, [encodedHtml]);

  return (
    <iframe
      key={urlString}
      ref={iframeRef}
      sandbox="allow-scripts"
      src={iframeSrc || ''}
      title="Dynamic Visualization"
      style={{ border: 'none', display: 'block' }}
      className="aspect-[3/4] w-full"
    />
  );
};

export default CodegenViewer;
