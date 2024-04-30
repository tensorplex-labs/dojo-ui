export const useCopyToClipboard = (text: string): (() => void) => {
  return () => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };
};
