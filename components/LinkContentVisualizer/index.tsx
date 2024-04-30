import { FontSpaceMono } from "@/utils/typography";

interface LinkContentVisualizerProps {
    title: string;
    showTitle: boolean;
    url : string;
  }
  
  const LinkContentVisualizer: React.FC<LinkContentVisualizerProps> = ({ title, showTitle, url }) => {
    return (
      <div className="flex flex-col justify-center w-full h-full">
        {showTitle && <p className={`text-start font-bold ${FontSpaceMono.className}`}>{title}</p>}
          <iframe src={url}  
            className="w-full aspect-[3/4] px-[10px]"
            title="elastic-newton-69zqqk"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          />
      </div>
    );
  };
  
  export default LinkContentVisualizer;