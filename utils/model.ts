export type DefaultApiResponse<T> = {
  success: boolean;
  body: T;
  error: any;
};
