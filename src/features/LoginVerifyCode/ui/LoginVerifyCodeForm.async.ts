import { lazy } from 'react';

export const LoginVerifyCodeFormAsync = lazy(
  async () => await import('./LoginVerifyCodeForm'),
);
