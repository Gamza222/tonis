export interface RegisterSchemaData {
  name: string;
  email: string;
  password: string;
  code: string;
}

export interface RegisterSchema {
  data: RegisterSchemaData;
  userId: string;
  isLoading: boolean;
  error?: string;
}
