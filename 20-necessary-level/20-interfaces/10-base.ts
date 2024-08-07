(() => {
  interface Config {
    protocol: "http" | "https";
    port: 3000 | 3001;
    log: (msg: string) => void;
  }

  interface Role {
    role: string;
  }

  interface ConfigWithRole extends Config, Role {} //combining interfaces into one

  const serverConfig: ConfigWithRole = {
    protocol: "https",
    port: 3001,
    role: "admin",
    log: (msg: string): void => console.log(msg),
  };

  type StartFunction = (
    protocol: "http" | "https",
    port: 3000 | 3001,
    log: Function //Built-in type. It is used when we do not know at all, then the function here will be.
  ) => string;

  const startServer: StartFunction = (
    protocol: "http" | "https",
    port: 3000 | 3001,
    log: Function
  ): "Setver started" => {
    log(`Server started on ${protocol}://server:${port}`);
    return "Setver started";
  };

  startServer(serverConfig.protocol, serverConfig.port, serverConfig.log);
})();
