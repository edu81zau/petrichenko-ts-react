/* 
We need to add types of variables in file 20-task.ts
*/

(() => {
  const electricityUserData = {
    readings: 95,
    units: "kWt",
    mode: "double",
  };

  const waterUserData = {
    readings: 3,
    units: "m3",
  };

  const elRate = 0.45;
  const wRate = 2;

  const monthPayments: number[] = [0, 0]; // [electricity, water]

  const calculatePayments = (
    electricityUserData: { mode: string; readings: number },
    waterUserData: { readings: number },
    elRate: number,
    wRate: number
  ) => {
    if (
      electricityUserData.mode === "double" &&
      electricityUserData.readings < 50
    ) {
      monthPayments[0] = electricityUserData.readings * elRate * 0.7;
    } else {
      monthPayments[0] = electricityUserData.readings * elRate;
    }

    monthPayments[1] = waterUserData.readings * wRate;
  };

  const sendInvoice = (
    monthPayments: number[],
    electricityUserData: {
      readings: number;
      units: string;
    },
    waterUserData: {
      readings: number;
      units: string;
    }
  ): string => {
    const text = `    Hello!
    This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
    It will cost: ${monthPayments[0]}€
    
    This month you used ${waterUserData.readings} ${waterUserData.units} of water
    It will cost: ${monthPayments[1]}€`;

    return text;
  };

  calculatePayments(electricityUserData, waterUserData, elRate, wRate);
  console.log(sendInvoice(monthPayments, electricityUserData, waterUserData));
})();
