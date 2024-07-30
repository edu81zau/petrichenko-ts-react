const dataFromControl = {
  water: 500,
  el: 300,
};

function checkReadings(data: typeof dataFromControl): boolean {
  const dataFromUser = {
    water: 500,
    el: 300,
  };

  if (data.el === dataFromUser.el && data.water === dataFromUser.water) {
    return true;
  } else return false;
}

const PI = 3.14;
let PIClone: typeof PI;
