(() => {
  interface User {
    login: string;
    password: string;
    age: number;
    //addr?:string;
    addr: string | undefined;
    parents?: {
      mother?: string; //creating an optional property
      father?: string;
    };
  }

  const user: User = {
    login: "first!",
    password: "qwerty",
    age: 50,
    addr: "Agent",
  };

  const dbName = "12345";

  function sendUserData(obj: User, db?: string): void {
    console.log(obj.parents?.father?.toUpperCase(), db?.toLowerCase());
  }
})();
