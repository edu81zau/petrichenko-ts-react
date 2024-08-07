(() => {
  type Config = { protocol: "http" | "htts"; port: 3000 | 3001 };
  type Role = {
    role: string;
  };

  const serverConfig: Config = {
    protocol: "htts",
    port: 3001,
  };

  const backupConfing: Config = {
    protocol: "http",
    port: 3001,
  };

  const startServer: (
    protocol: "http" | "htts",
    port: 3000 | 3001
  ) => string = (
    protocol: "http" | "htts",
    port: 3000 | 3001
  ): "Server started" => {
    console.log(`Server started on ${protocol}://server:${port}`);
    return "Server started";
  };
})();
