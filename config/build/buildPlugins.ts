import webpack from "webpack";

import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import NodePolyfillPlugin from "node-polyfill-webpack-plugin";
import Dotenv from "dotenv-webpack";

import CopyPlugin from "copy-webpack-plugin";
import path from "path";

import { type BuildOptions } from "./types/config";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPlugins({
  paths,
  isDev,
  apiUrl,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html,
      // favicon: '.public/favicon.png',
    }),
    new NodePolyfillPlugin(),

    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new Dotenv(),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
    }),

    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../../public/locales"),
          to: path.resolve(__dirname, "../../build/public/locales"),
          noErrorOnMissing: true, // To prevent errors if the folder doesn't exist
        },
        {
          from: path.resolve(
            __dirname,
            "../../public/tonconnect-manifest.json"
          ),
          to: "tonconnect-manifest.json",
        },
      ],
    }),
  ];

  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(new ReactRefreshWebpackPlugin());
    plugins.push(
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      })
    );
  }

  return plugins;
}
