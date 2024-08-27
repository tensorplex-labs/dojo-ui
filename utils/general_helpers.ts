const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === 'undefined') {
    return '';
  }
  return localStorage.getItem(key);
};

const clearLocalStorage = () => {
  localStorage.clear();
};

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const retry = async <T>(
  fn: (...args: any[]) => Promise<T>,
  options: { maxRetries?: number; delayMs?: number; verbosity?: boolean } = {},
  ...args: any[]
): Promise<T> => {
  const maxRetries = options.maxRetries ?? 3; // Default to 3 retries
  const delayMs = options.delayMs ?? 1000; // Default to 1000ms (1 second) delay
  const verbosity = options.verbosity ?? false;
  let retries = 1;

  while (retries <= maxRetries) {
    try {
      return await fn(...args);
    } catch (error) {
      verbosity && console.log(`Retry ${retries} after ${delayMs}ms`);
      retries++;
      await wait(delayMs); // Wait before retrying
    }
  }
  throw new Error('Max retries exceeded.'); // Throw the error if max retries exceeded
};

type FileType = 'js' | 'css' | 'html';
const getFileContentFromTask = (filteType: FileType, fileContent: any): string => {
  switch (filteType) {
    case 'js':
      const jsFile = Object.keys(fileContent).find((key) => /^.*\.js$/.test(key)) ?? '';
      return fileContent[jsFile]?.content || '';
    case 'css':
      const cssFile = Object.keys(fileContent).find((key) => /^.*\.css$/.test(key)) ?? '';
      return fileContent[cssFile]?.content || '';
    case 'html':
      const htmlFile = Object.keys(fileContent).find((key) => /^.*\.html$/.test(key)) ?? '';
      return fileContent[htmlFile]?.content || '';
  }
};

export { clearLocalStorage, getFileContentFromTask, getFromLocalStorage, retry, wait };
