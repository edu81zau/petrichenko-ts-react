(() => {
  const fetchData = (url: string, method: "GET" | "POST"): void => {
    console.log(method);
  };

  const reqOptions = {
    url: "https://someurl.com",
    method: "GET",
  };

  const str = "str";
  const method = "GET";

  fetchData("qqq", "GET");
  //fetchData(reqOptions.url, reqOptions.method as "GET");
  fetchData(reqOptions.url, <"GET">reqOptions.method);

  const box = document.querySelector(".box") as HTMLElement;
  const input = document.querySelector("input") as HTMLInputElement;

  //const someNumber: number = input.value as any as number;
  //const someNumber2: number = input.value as unknown as number; //this methos works as with "any"
  const someNumber: number = +input.value; // This is the best part to have number from string
  console.log(someNumber.toFixed);

  let a = "value" as const;
  let b = { f: 100 } as const;
  let c = [] as const;

  let value = "value";
  let arr = ["arr", "abb"];
  let obj = { f: 100 };
})();
