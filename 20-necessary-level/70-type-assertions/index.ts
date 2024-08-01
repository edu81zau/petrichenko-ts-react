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

  const someNumber: number = input.value as any as number;
  const someNumber2: number = input.value as unknown as number; //as work as with "any"
  console.log(someNumber);
})();
