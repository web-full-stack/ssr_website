const Config = {
  blogCode: "ssr_blog",
  apiUrl: "http://127.0.0.1:7001", // API 服务器地址
  spmUrl: "http://127.0.0.1:7003",
};

if (typeof window !== "undefined") {
  // 浏览器环境下的逻辑 使用外网域名
  if (!window.location.origin.includes(":3000")) {
    Config.apiUrl = "https://ssr_website.web-full-stack.com/api";
    Config.spmUrl = "https://ssr_website.web-full-stack.com/spm";
  }
}

export default Config;
