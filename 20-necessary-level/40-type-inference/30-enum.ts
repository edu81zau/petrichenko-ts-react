const TOP = "Top";
const RIGHT = "Right";

enum Directions {
  TOP,
  RIGHT,
  LEFT,
  BOTTOM,
}

enum TimingFunc {
  EASE = "ease",
  EASE_IN = "ease_in",
  LINEAR = "linear",
  TEMP = `${EASE}-in`,
  //ERROR = 5, //плохой тон мешать переменные разных типов в одном перечисление
}

const enum TimingFuncN {
  EASE = 2,
  EASE_IN = 6,
  LINEAR = EASE * 2,
}

type TimingFuncU = "ease" | "ease-in" | "linear";

function frame(elem: string, dir: Directions, tFunc: TimingFuncU) {
  if (dir === Directions.RIGHT) {
    console.log(tFunc);
  }
}

frame("id", Directions.RIGHT, "ease");
