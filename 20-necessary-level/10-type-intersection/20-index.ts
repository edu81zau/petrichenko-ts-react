(() => {
  type Confing = { protocol: "http" | "https"; port: 3000 | 3001 };

  type Role = {
    role: string;
  };

  type ConfigWithRole = Confing & Role; //type intersection

  const serverConfig: ConfigWithRole = {
    protocol: "https",
    port: 3001,
    role: "admin",
  };

  const backupConfing: ConfigWithRole = {
    protocol: "http",
    port: 3000,
    role: "sysadmin",
  };

  type StartFunction = (
    protocol: "http" | "https",
    port: 3000 | 3001
  ) => string; //using the type as a code template

  const startServer: StartFunction = (
    protocol: "http" | "https",
    port: 3000 | 3001
  ): "Setver started" => {
    console.log(`Server started on ${protocol}://server:${port}`);
    return "Setver started";
  };

  startServer("https", 3001);

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
})();
