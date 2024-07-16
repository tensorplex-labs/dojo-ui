import { HTMLContentVisualizerProps } from '@/types/QuestionPageTypes';
import { FontSpaceMono } from '@/utils/typography';
import React from 'react';

const HTMLContentVisualizer: React.FC<HTMLContentVisualizerProps> = ({ htmlContent, title, showTitle, style }) => {
  return (
    <div className={`flex size-full flex-col justify-center ${style} items-center`}>
      {showTitle && <p className={`text-left ${FontSpaceMono.className} text-base font-bold`}>{title}</p>}
      <iframe
        srcDoc={htmlContent}
        title={title}
        className="mt-[34px] aspect-[5/4.5] w-full px-[10px]"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
};

export default HTMLContentVisualizer;
