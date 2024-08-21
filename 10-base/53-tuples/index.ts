(() => {
  const userData = {
    isBirthdayData: true,
    userNameData: "John",
    ageData: 40,
    messages: {
      error: "Error",
    },
  };

  // The main disadvantage of tuples is that we don’t know what the data in it means
  // If we add elements to a tuple, we won't be able to access them. It has a fixed size.
  const userDataTuple: [boolean, number, string] = [true, 50, "Mira"]; //tuple
  const userDataTuple1: [...boolean[], number, string] = [
    true,
    false,
    50,
    "Mira",
  ]; /** We can add an unlimited number of boolean types.
        But we can only do this once. 
        It doesn't matter - at the beginning, in the middle or at the end.
   */

  const createError = (msg: string) => {
    throw new Error(msg);
  };

  function logBrMsg({
    isBirthdayData,
    userNameData,
    ageData,
    messages: { error },
  }: {
    isBirthdayData: boolean;
    userNameData: string;
    ageData: number;
    messages: { error: string };
  }): string {
    if (isBirthdayData) {
      return `Congrats ${userNameData.toUpperCase()}, age: ${ageData + 1}`;
    } else {
      return createError(error);
    }
  }

  console.log(logBrMsg(userData));
})();
