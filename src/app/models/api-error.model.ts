export interface ApiError {
  error: {
    error?: {
      message: string;
    };
    message?: string;
  };
}
