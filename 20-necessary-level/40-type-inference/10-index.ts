(() => {
  let salary: number;
  salary = 500;

  interface UserDate {
    isBirthdayData: boolean;
    ageData: number;
    userNameData: string;
  }

  const userData =
    '{ "isBirthdayData": true, "ageData":40, "userNameData":"John" }';

  const userObj: UserDate = JSON.parse(userData);
  console.log(userObj);

  let isOkay = true;
  let movement: boolean | string = false;

  if (isOkay) {
    movement = "moving";
  }

  // optional (Property Modifiers)

  interface User {
    login: string;
    password: string;
    age: number;
    // addr?: string; // optional parameter
    addr: string | undefined;
    parents?: {
      mother?: string;
      father?: string;
    };
  }

  const user: User = {
    login: "first!",
    password: "qwerty",
    age: 50,
    addr: "dsdhdhfjdfh",
  };

  const dbName = "1234";

  function sendUserData(obj: User, db?: string): void {
    console.log(obj, db?.toLowerCase());
  }
})();
