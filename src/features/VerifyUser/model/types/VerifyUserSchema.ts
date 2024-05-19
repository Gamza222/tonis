export interface VerifyUserScemaData {
  verifyCode: string;
}

export interface VerifyUserSchema {
  data: VerifyUserScemaData;
  isLoading: boolean;
  userId: string;
  error?: string;
}
