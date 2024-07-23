(() => {
  const userData = {
    isBirthdayData: true,
    userNameData: "John",
    ageData: 40,
  };

  const createError = (msg: string) => {
    throw new Error(msg);
  };

  function logBrMsg(data: {
    isBirthdayData: boolean;
    userNameData: string;
    ageData: number;
  }): string {
    if (data.isBirthdayData) {
      return `Congrats ${data.userNameData.toUpperCase()}, age: ${
        data.ageData + 1
      }`;
    } else {
      return createError("Error");
    }
  }

  console.log(logBrMsg(userData));
})();
