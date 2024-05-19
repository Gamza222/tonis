import type webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { type BuildEnv, type BuildPaths } from './config/build/types/config';
import path from 'path';

export default (env: BuildEnv) => {
  // PATHS
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  // MODE
  const mode = env.mode || 'development';

  // DEVELOPENT MODE OR PRODUCTION
  const isDev = mode === 'development';
  // PORT TO DEV SERVER
  const PORT = env.port || 3005;
  // PORT TO API
  const apiUrl = env.apiUrl || 'http://localhost:3000';

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
  });

  return config;
};
