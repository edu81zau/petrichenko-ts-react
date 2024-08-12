(() => {
  const PI = 3.14;
  let PIClone: typeof PI;
  if (1) {
    console.log(`${(PIClone = 3.14)}`);
  }
})();
