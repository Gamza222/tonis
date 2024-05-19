import { User } from 'entities/User';

export interface LoginVerifyCodeSchema {
  inputData: {
    code: string;
    email: string;
  };
  data: User | null;
  isLoading?: boolean;
  error?: string;
}
