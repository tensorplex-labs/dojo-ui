'use client';
import * as GaussianSplats3D from '@mkkellogg/gaussian-splats-3d';
import { decompress } from 'fzstd';

import Head from 'next/head';
import { useEffect } from 'react';
function padUint8ArrayTo16Bytes(uint8Array: Uint8Array): Uint8Array {
  const bytesNeeded = (16 - (uint8Array.length % 16)) % 16;
  if (bytesNeeded === 0) return uint8Array;

  const paddedArray = new Uint8Array(uint8Array.length + bytesNeeded);
  paddedArray.set(uint8Array);
  // Fill remaining bytes with zeros
  paddedArray.fill(0, uint8Array.length);

  return paddedArray;
}

async function decompressInBrowser(compressedData: Uint8Array): Promise<Uint8Array> {
  try {
    const decompressed = decompress(compressedData);
    return decompressed;
  } catch (error) {
    console.error('Browser decompression failed:', error);
    throw error;
  }
}

const spzLoader = async () => {
  //   const spzUrl = 'http://localhost:3001/spz/racoonfamily.spz';
  //   const spzUrl = 'http://localhost:3001/spz/a9807cb1-9944-429d-8681-c3f301741687.spz';
  const spzUrl = 'http://localhost:3001/spz/blue_industrial_building_with_pipes_win.spz';
  //   const spzUrl = 'http://localhost:3001/spz/modern_office_building_with_windows_right.spz';

  const { spzBuffer, arrayBuffer } = await fetch(spzUrl)
    .then((res) => res.arrayBuffer())
    .then((buf) => ({ spzBuffer: new Uint8Array(buf), arrayBuffer: buf }));
  console.log('spzbuffer', spzBuffer.byteLength, spzBuffer.length);
  return { spzBuffer, arrayBuffer };
};

const isZSTPed = (buffer: Uint8Array) => {
  return buffer.length >= 2 && buffer[0] === 0x28 && buffer[1] === 0xb5;
};

const isGzipped = (buffer: Uint8Array) => {
  return buffer.length >= 2 && buffer[0] === 0x1f && buffer[1] === 0x8b;
};

export default function SPZViewer() {
  useEffect(() => {
    console.log('crossOriginIsolated:', self.crossOriginIsolated);
    console.log('SharedArrayBuffer available:', typeof SharedArrayBuffer !== 'undefined');

    const doLoad = async () => {
      try {
        const { spzBuffer, arrayBuffer } = await spzLoader();

        // debugSpzBuffer(arrayBuffer);
        const splatBuffer = await GaussianSplats3D.SpzLoader.loadFromFileData(arrayBuffer, 1, 1, true, 2);

        const viewer = new GaussianSplats3D.Viewer({
          cameraUp: [0, 1, 0],
          initialCameraPosition: [0.24877, 1.15148, 4.52072],
          initialCameraLookAt: [-0.05887, -0.99504, -0.12471],
          sphericalHarmonicsDegree: 2,
          antialiased: false,
          gpuAcceleratedSort: false, // Disable worker usage
        });

        const splatBufferOptions = {
          splatAlphaRemovalThreshold: 1,
        };

        await viewer.addSplatBuffers([splatBuffer], [splatBufferOptions]);
        viewer.start();
        console.log('successfully loaded with no issues');
        return viewer;
      } catch (error) {
        console.error('Error loading SPZ:', error);
      }
    };

    const doLoad2 = async () => {
      const { spzBuffer } = await spzLoader();

      let finalBuffer;
      if (isGzipped(spzBuffer)) {
        finalBuffer = spzBuffer;
      } else if (isZSTPed(spzBuffer)) {
        finalBuffer = await decompressInBrowser(spzBuffer);
      } else {
        finalBuffer = spzBuffer;
      }
      console.log('decompressedArrayBuffer', finalBuffer.byteLength);
      //   debugSpzBuffer(decompressedArrayBuffer);

      // Parse SPZ data directly without gzip decompression
      const splatBuffer = await GaussianSplats3D.SpzLoader.loadFromFileData(finalBuffer, 1, 3);

      // Create viewer
      const viewer = new GaussianSplats3D.Viewer({
        cameraUp: [0, 1, 0],
        initialCameraPosition: [0.76835, -0.25429, 6.17246],
        initialCameraLookAt: [0.14909, 0.16598, 0.05661],
        sphericalHarmonicsDegree: 2,
      });

      const splatBufferOptions = {
        splatAlphaRemovalThreshold: 1,
      };

      await viewer.addSplatBuffers([splatBuffer], [splatBufferOptions]);
      viewer.start();
    };
    doLoad2();
  }, []);

  return (
    <>
      <Head>
        {/* Cross-Origin Isolation Headers for SharedArrayBuffer */}
        <meta httpEquiv="Cross-Origin-Opener-Policy" content="same-origin" />
        <meta httpEquiv="Cross-Origin-Embedder-Policy" content="require-corp" />
      </Head>
      <div>
        <h1>SPZ Viewer</h1>
      </div>
    </>
  );
}
