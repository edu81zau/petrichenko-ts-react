(() => {
  interface Car {
    name: "car";
    engine: string;
    wheels: number;
  }

  interface Ship {
    name: "ship";
    engine: string;
    sail: string;
  }

  interface Airplane {
    name: "airplane";
    engine: string;
    wings: string;
  }

  //This code demonstrates that there is no need to create complex interfaces
  interface ComplexVehicle {
    name: "car" | "ship" | "airplane";
    engine: string;
    wheels?: number;
    sail?: string;
    wings?: string;
  }

  type Vehicle = Car | Ship | Airplane;

  function isCar(car: Vehicle): car is Car {
    return "wheels" in car;
  }

  function isShip(ship: Vehicle): ship is Ship {
    return "sail" in ship;
  }

  const car: ComplexVehicle = {
    name: "car",
    engine: "V8",
  };

  function repairVehicle(vehicle: ComplexVehicle) {
    switch (vehicle.name) {
      case "car":
        console.log(vehicle.wheels! * 2); //not null
        break;
      case "ship":
        console.log(vehicle.sail);
        break;
      case "airplane":
        console.log(vehicle.wings);
        break;
      default:
        //const smth: never = vehicle;//It doesn't work because here will be everything
        console.log("Ouuups!");
    }
  }

  repairVehicle(car);
})();
