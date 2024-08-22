(() => {
  //индексные свойства. Данный момент используется, когда известен тип элементов,
  //но не знаем их количество

  interface Styles {
    [key: string]: string;
  }

  const styles: Styles = {
    position: "absolute",
    top: "20px",
    left: "50px",
  };
})();
