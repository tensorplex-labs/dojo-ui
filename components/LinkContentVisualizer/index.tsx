interface LinkContentVisualizerProps {
    title: string;
    showTitle: boolean;
    url : string;
  }
  
  const LinkContentVisualizer: React.FC<LinkContentVisualizerProps> = ({ title, showTitle, url }) => {
    return (
      <div className="flex flex-col justify-center w-full h-full">
        {showTitle && <p className="text-center font-bold">{title}</p>}
          <iframe src="https://codesandbox.io/embed/69zqqk?view=preview&module=%2Findex.js&hidenavigation=1"
              style={{
                width: '100%',
                height: '500px',
                border: '0',
                borderRadius: '4px',
                overflow: 'hidden'
              }}title="elastic-newton-69zqqk"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          />
      </div>
    );
  };
  
  export default LinkContentVisualizer;