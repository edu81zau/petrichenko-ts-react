(() => {
  //type Config = { protocol: "http" | "https"; port: 3000 | 3001 };
  interface Config {
    protocol: "http" | "https";
    port: 3000 | 3001;
    log: (msg: string) => void;
  }
  /*
    type Role = {
      role: string;
    };
    type ConfigWithRole = Confing & Role;
  */

  interface Role {
    role: string;
  }

  interface ConfigWithRole extends Config, Role {}

  const serverConfig: ConfigWithRole = {
    protocol: "https",
    port: 3001,
    role: "admin",
    log: (msg: string): void => console.log(msg),
  };
  /*
  const backupConfing: ConfigWithRole = {
    protocol: "http",
    port: 3000,
    role: "sysadmin",
  };

*/
  type StartFunction = (
    protocol: "http" | "https",
    port: 3000 | 3001,
    log: Function
  ) => string;

  const startServer: StartFunction = (
    protocol: "http" | "https",
    port: 3000 | 3001
  ): "Setver started" => {
    console.log(`Server started on ${protocol}://server:${port}`);
    return "Setver started";
  };

  startServer(serverConfig.protocol, serverConfig.port, serverConfig.log);

  /*
  type AnimationTimingFunc = "ease" | "ease-out" | "ease-in";
  type AnimationID = string | number;

  function createAnimation(
    id: AnimationID,
    animName: string,
    timingFunc: AnimationTimingFunc = "ease",
    duration: number,
    iterCount: "infinite" | number
  ): void {
    console.log(`${animName} ${timingFunc} ${duration} ${iterCount}`);
  }
  createAnimation("id", "fade", "ease-in", 5, "infinite");
  */
  //индексные свойства
})();
