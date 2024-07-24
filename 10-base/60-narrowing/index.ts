(() => {
  const message: string | number = 5;
  const messages: string[] | number[] = ["a", "b"];
  /* 
  //Check type of vatiables by typeof
  function printMsg(msg: string | number): void {
    if (typeof msg === "string") {
      console.log(msg.toLowerCase());
    } else {
      console.log(msg.toExponential());
    }
  }
*/
  function printMsg(msg: string[] | number | boolean): void {
    if (Array.isArray(msg)) {
      msg.forEach((m) => console.log());
    } else if (typeof msg === "number") {
      console.log(msg.toFixed());
    } else {
      console.log(msg);
    }
  }
  printMsg(4);

  const printReadings = (a: number | string, b: number | boolean) => {
    if (a === b) {
      console.log(a, b);
    }
  };
  const printReadings2 = (a: number[] | string) => {
    console.log(a.slice(0, 3));
  };

  function checkReadings(
    readings: { system: number } | { user: number }
  ): void {
    if ("system" in readings) {
      console.log(readings.system);
    } else {
      console.log(readings.user);
    }
  }
  function logValue(x: string | Date) {
    if (x instanceof Date) {
      console.log(x.getDate());
    } else {
      console.log(x.trim());
    }
  }
})();
