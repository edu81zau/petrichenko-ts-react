//const isBirthdayDate: boolean = true;
//let ageDate: number = 40;
//const userNameDate: string = "John";

//let salary: number;
//salary = 5000;

const userData =
  '{"isBirthdayDate": true, "ageDate": 40, "userNameDate": "John"}';

const userObj: {
  isBirthdayDate: boolean;
  userNameDate: string;
  ageDate: number;
} = JSON.parse(userData);

console.log(userObj);
console.log(
  "------------------------------------------------------------------"
);

function logBrMsg(isBirthday: boolean, userName: string, age: number): string {
  console.log("logBrMsg");
  if (isBirthday) {
    return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
    console.log(
      "------------------------------------------------------------------"
    );
  } else {
    return "Error";
    console.log(
      "------------------------------------------------------------------"
    );
  }
}

let res = logBrMsg(
  userObj.isBirthdayDate,
  userObj.userNameDate,
  userObj.ageDate
);
console.log("res=", res);
