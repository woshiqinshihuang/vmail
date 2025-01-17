/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  serverDependenciesToBundle: [
    "database/dao",
    "database/db",
    "database/schema",
    "icons",
  ],
  assetsBuildDirectory: "public/build",
  publicPath: "/build/", // 确保路径以斜杠开头和结尾
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
};
