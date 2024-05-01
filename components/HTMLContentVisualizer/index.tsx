import { FontSpaceMono } from '@/utils/typography';
import React from 'react';

interface HTMLContentVisualizerProps {
  htmlContent: string;
  title: string;
  showTitle: boolean;
  style?: string;
}
const HTMLContentVisualizer: React.FC<HTMLContentVisualizerProps> = ({ htmlContent, title, showTitle, style }) => {
  return (
    <div className={`flex flex-col justify-center w-full h-full ${style} items-center`}>
      {showTitle && <p className={`text-left ${FontSpaceMono.className} text-base font-bold`}>{title}</p>}
      <iframe
        srcDoc={htmlContent}
        title={title}
        className="w-full aspect-[5/4.5] mt-[34px] px-[10px]"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
};

export default HTMLContentVisualizer;