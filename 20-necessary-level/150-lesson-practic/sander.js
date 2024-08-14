/**
 * @TODO: пройти лекцию про html form and input submit
 * preventDefault() - search and read information
 * разобрать последовательность Object.values(data).every(...)
 */
console.log("Test 1", document.getElementById("email")); //поиск по id при помощи ID
console.log("Test 2", document.querySelector("#email")); //поиск по id при помощи селектора
console.log("Test 3", document.querySelector('* [id="emailHelp"]')); //поиск по id при помощи селектора
console.log("Test 4", document.querySelectorAll("input")); //поиск по id при помощи селектора
console.log("Test 4", document.querySelectorAll('input[type="checkbox"]')); //поиск по id при помощи селектора
