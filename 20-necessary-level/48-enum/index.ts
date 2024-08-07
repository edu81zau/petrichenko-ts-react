(() => {
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
})();
