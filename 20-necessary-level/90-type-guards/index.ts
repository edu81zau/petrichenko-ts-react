(() => {
  function printMsg(msg: string[] | number | boolean): void {
    if (Array.isArray(msg)) {
      msg.forEach((m) => console.log(m));
    } else if (isNumber(msg)) {
      console.log(msg);
    } else {
      console.log(msg);
    }
    console.log(msg);
  }

  printMsg(true);

  // function isNumber(n: string[] | number | boolean): n is number {
  //   return typeof n === "number";
  // }
  /**
  Что делает оператор is?

    Проверяет тип значения: Оператор is позволяет проверить, принадлежит ли значение 
    определенному типу.
    Возвращает логическое значение: Результатом операции is является булево значение: 
    true, если тип совпадает, и false в противном случае.
  */
  function isNumber(n: unknown): n is number {
    return typeof n === "number";
  }

  interface Car {
    engine: string;
    wheels: {
      number: number;
      type: string;
    };
  }

  interface Ship {
    engine: string;
    sail: string;
  }

  function repairVehicle(vehicle: Car | Ship) {
    if (isCar(vehicle)) {
      vehicle.engine;
    } else if (isShip(vehicle)) {
      vehicle;
    } else {
      vehicle;
    }
  }

  function isCar(car: Car | Ship): car is Car {
    //
    return (car as Car).wheels.number !== undefined;
  }

  function isShip(ship: Car | Ship): ship is Ship {
    return "sail" in ship;
  }
})();
