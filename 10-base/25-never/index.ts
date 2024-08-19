// we have type never when we writing infinite loop or infinite recursion

const isBirthdayDate: boolean = true;
let ageDate: number = 40;
const userNameDate: string = "John";

const createError = (msg: string) => {
  console.log("createError");
  throw new Error(msg);
  console.log("createError", "after throw");
  return "";
};

function logBrMsg(isBirthday: boolean, userName: string, age: number): string {
  console.log("logBrMsg");
  if (isBirthday === true) {
    console.log("logBrMsg", "if true");
    return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
  } else if (isBirthday === false) {
    console.log("logBrMsg", "if false");
    return "Too bad";
  }
  return createError("Error...");
}

logBrMsg(isBirthdayDate, userNameDate, 40);
try {
  logBrMsg(false, userNameDate, 40);
} catch (error) {
  console.log("We catch error");
  if (error instanceof Error) {
    console.log("We catch error/Error", error.message);
  }
}
