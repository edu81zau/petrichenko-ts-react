(() => {
  interface User {
    readonly login: string;
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
    password: "qwerty",
    age: 50,
  };

  //Readonly with generics <> for all interface
  const userFreeze: Readonly<User> = {
    login: "first!",
    password: "qwerty",
    age: 50,
  };

  const basicPorts: readonly [number, ...string[]] = [3000, "3001", "5555"];

  const allPorts: ReadonlyArray<number> = [300, 456, 6878]; // diferent part for readonly of array
})();
