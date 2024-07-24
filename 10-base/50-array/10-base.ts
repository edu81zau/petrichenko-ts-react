(() => {
  const userData = {
    isBirthdayData: true,
    userNameData: "John",
    ageData: 40,
    messages: {
      error: "Error",
    },
  };

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

  const departments: string[] = ["dev", "design", "marketing"];

  const department = departments[0];

  const report = departments
    .filter((d: string) => d !== "dev")
    .map((d: string) => `${d} - done`);

  const nums: number[][] = [
    [3, 5, 7],
    [3, 5, 7],
  ];

  const [first] = report;
  console.log(first);
})();
