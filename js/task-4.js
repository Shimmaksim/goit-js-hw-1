const credits = 23580;
const pricePerDroid = 3000;

const userPay = prompt("Сколько дроидов вы хотите купить?");
let totalPrice = userPay * pricePerDroid;
if (userPay === null) {
  console.log("Отменено пользователем!");
} else if (totalPrice < credits) {
  console.log(
    `Вы купили ${userPay} дроидов, на счету осталось ${credits -
      totalPrice} кредитов.`
  );
} else if (totalPrice > credits) {
  console.log("Недостаточно средств на счету!");
}
