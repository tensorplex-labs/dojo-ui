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
  encodedCss?: string;
}

const decodedCSP = `<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src data: blob:; connect-src 'none'; form-action 'none'; base-uri 'none';">`;

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

        console.log("iframe eth in window",'ethereum' in window)
        console.log("iframe has cookies",!!document.cookie)
        console.log("iframe has localstorage",localStorage)
      })();
    `;

const decodedTest = `<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Interactive House Visualization</title>
    
<style>
        #house {
            width: 200px;
            height: 200px;
            position: relative;
            background-color: #f0f0f0;
        }
        .window {
            width: 50px;
            height: 50px;
            background-color: #fff;
            position: absolute;
            display: block;
        }
        #resizeHandle {
            width: 10px;
            height: 10px;
            background-color: #333;
            position: absolute;
            bottom: 0;
            right: 0;
            cursor: nwse-resize;
        }
    </style></head>
<body>
    <div id='house'>
        <div class='window' style='top: 10px; left: 10px;'></div>
        <div class='window' style='top: 10px; right: 10px;'></div>
        <div class='window' style='bottom: 10px; left: 10px;'></div>
        <div class='window' style='bottom: 10px; right: 10px;'></div>
        <div id='resizeHandle'></div>
    </div>
    <input type='color' id='colorPicker'>
    <button id='windowToggle'>Toggle Windows</button>
    <script src='index.js'></script>
<script>const house = document.getElementById('house');
const colorPicker = document.getElementById('colorPicker');
const windowToggle = document.getElementById('windowToggle');
const resizeHandle = document.getElementById('resizeHandle');

// Change house color
colorPicker.addEventListener('change', (event) => {
    house.style.backgroundColor = event.target.value;
});

// Toggle windows visibility
windowToggle.addEventListener('click', () => {
    const windows = house.querySelectorAll('.window');
    windows.forEach(win => {
        win.style.display = win.style.display === 'none' ? 'block' : 'none';
    });
});

// Resize house
let isResizing = false;
resizeHandle.addEventListener('mousedown', () => {
    isResizing = true;
});
document.addEventListener('mousemove', (event) => {
    if (isResizing) {
        house.style.width = \`\${event.clientX - house.offsetLeft}px\`;
        house.style.height = \`\${event.clientY - house.offsetTop}px\`;
    }
});
document.addEventListener('mouseup', () => {
    isResizing = false;
});</script></body>
</html>`;

const CodegenVis = ({ encodedHtml, encodedJs, encodedCss }: CodegenVisProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeSrc, setIframeSrc] = useState<string | null>(null);

  useEffect(() => {
    console.log('parent eth in window', 'ethereum' in window);
    console.log('parent has cookies', !!document.cookie);
    console.log('parent has localstorage', localStorage);
    let url = '';
    try {
      const decodedHtml = decodeString(encodedHtml);
      const decodedJs = decodeString(encodedJs);
      const decodedCss = decodeString(encodedCss ?? '');
      const wrappedJs = `
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

        console.log("iframe eth in window",'ethereum' in window)
        console.log("iframe has cookies",!!document.cookie)
        console.log("iframe has localstorage",localStorage)


        // Your original JS code
        ${decodedJs}
      })();
    `;

      const fullHtml = `
      <!DOCTYPE html>
      <html>
        <head>
            <meta http-equiv="Content-Security-Policy" content="
                default-src 'none';
                script-src 'unsafe-inline';
                style-src 'unsafe-inline';
                img-src data: blob:;
                connect-src 'none';
                form-action 'none';
                base-uri 'none';
            ">
            <style>${decodedCss}
            </style>
        </head>
        <body>
          ${decodedHtml}
          <script>${wrappedJs}</script>
        </body>
      </html>
    `;

      const blob = new Blob(
        [
          decodedTest
            .replace(/<head>/, `<head>${decodedCSP}`)
            .replace(/<script>/, `<script>${decodedJsSecurity}</script><script>`),
        ],
        { type: 'text/html' }
      );
      url = URL.createObjectURL(blob);
      setIframeSrc(url);
    } catch (err) {}
    return () => {
      url && URL.revokeObjectURL(url);
    };
  }, [encodedHtml, encodedJs]);

  return (
    <iframe
      ref={iframeRef}
      sandbox="allow-scripts"
      src={iframeSrc || ''}
      title="Dynamic Visualization"
      style={{ border: 'none', display: 'block' }}
      className="aspect-[3/4] w-full"
    />
  );
};

export default CodegenVis;
