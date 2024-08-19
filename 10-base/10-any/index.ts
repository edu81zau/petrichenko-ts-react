//const isBirthdayDate: boolean = true;
//let ageDate: number = 40;
//const userNameDate: string = "John";

//When we create a variable without specifying the type, we get a variable of type any
//let salary: number;
//salary = 5000;

const userData =
  '{"isBirthdayDate": true, "ageDate": 40, "userNameDate": "John"}';

const userObj: {
  isBirthdayDate: boolean;
  userNameDate: string;
  ageDate: number;
} = JSON.parse(userData); //The function parse always returns type any

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
