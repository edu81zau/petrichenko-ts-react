const serverNewConfig = {
  protocol: "https",
  port: 3001,
  role: "admin",
};

const backupConfig = {
  protocol: "http",
  port: 3000,
};

interface BasicConfig {
  protocol: string;
  port: number;
}

const startNewServer = (config: BasicConfig): "Setver started" => {
  console.log(`Server started on ${config.protocol}://server:${config.port}`);
  return "Setver started";
};

startNewServer(serverNewConfig);
startNewServer(backupConfig);

//-----------------------------------------------------------------------------------

const serverNewConfig1: BasicConfig = {
  protocol: "https",
  port: 3001,
};

const backupConfig1: BasicConfig = {
  protocol: "http",
  port: 3000,
};

interface BasicConfig {
  protocol: string;
  port: number;
}

const startNewServer1 = (config: BasicConfig): "Setver started" => {
  console.log(`Server started on ${config.protocol}://server:${config.port}`);
  return "Setver started";
};

startNewServer1(serverNewConfig);
startNewServer1(backupConfig);
