interface User {
  login: string;
  password: string;
  age: number;
  addr?: string;
  parents?: {
    mother?: string;
    father?: string;
  };
}

const user: User = {
  login: "first!",
  password: "sdsd",
  age: 50,
};

const userFreeze: Readonly<User> = {
  login: "first!",
  password: "sdsd",
  age: 50,
};

//userFreeze.login = 777;

const dbName = "1234";

function sendUserData(obj: User, db?: string): void {
  console.log(obj.parents?.father?.toLowerCase(), db?.toLowerCase());
}

// const basicPorts: readonly number[] = [3000, 3001, 5555];
// basicPorts[0] = 5;
// basicPorts.push(777);

// const basicPorts: readonly [number, ...string[]] = [3000, "3001", "7777"];
// basicPorts[0] = 5;
// basicPorts.push(777);

const basicPorts: ReadonlyArray<number> = [3000, 3001, 5555];
