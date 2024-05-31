export interface User {
  photoLink?: string;
  photo_id?: string;
}

export interface UserScema {
  authData?: User;
  isLoading: boolean;
  error?: string;
}
