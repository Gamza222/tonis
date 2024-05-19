export interface User {
  created_at: string;
  userId: string;
  name: string;
  email: string;
  password: string;
  code: string;
  verified: boolean;
  verifCode: string;
  verifCode_created_at: string;
}

export interface UserScema {
  authData?: User;
}
