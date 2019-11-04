let totalNumber = 0;
let input;

do {
  input = prompt("Ввведите число");
  if (input !== null) {
    totalNumber += Number(input);
  }
} while (input !== null);
alert(`Общая сумма чисел равна ${totalNumber}`);
