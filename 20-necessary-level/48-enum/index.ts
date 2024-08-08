(() => {
  /**
   Problems:
   numerical enums
   1. Any number could be passed on. Not even included in the enum
   2. Can not do this:   frame("dir", Directions.RIGHT, "ease");
   3. Don't use const enum at all. Especially when developing libraries
   4. It is very difficult to combine two enums into one
   */
  enum Directions {
    TOP,
    RIGHT,
    LEFT,
    BOTTOM,
  }

  enum TimingFunc {
    EASE = "ease",
    EASE_IN = `${EASE}-in`,
    LINEAR = "linear",
  }

  enum TimingFunc2 {
    EASE = 2,
    EASE_IN = 4,
    LINEAR = EASE * 2,
  }

  function frame(elem: string, dir: Directions, tFunc: TimingFunc): void {
    if (dir === Directions.RIGHT) {
      console.log(tFunc);
    }
  }

  frame("dir", Directions.RIGHT, TimingFunc.EASE_IN);

  //Use type instead enums

  type TimingFuncU = "ease" | "ease-in" | "linear";

  function frameU(elem: string, dir: Directions, tFunc: TimingFuncU): void {
    if (dir === Directions.RIGHT) {
      console.log(tFunc);
    }
  }

  frameU("dir", Directions.RIGHT, "ease");

  //Here we use the method of replacing the string type with a literal one

  const timingFunc = {
    EASE: "ease",
    EASE_IN: "ease-in",
    LINEAR: "linear",
  } as const;

  function frameO(
    elem: string,
    dir: Directions,
    tFunc: keyof typeof timingFunc
  ): void {
    if (dir === Directions.RIGHT) {
      console.log(tFunc);
    }
  }

  frameO("dir", Directions.RIGHT, "EASE");
})();
