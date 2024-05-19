export interface LoginScemaData {
  password: string;
  email: string;
}

export interface LoginSchema {
  data: LoginScemaData;
  isLoading: boolean;
  userId: string;
  email: string;
  error?: string;
}
