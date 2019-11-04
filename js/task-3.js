const ADMIN_PASSWORD = "111";
let message;

const password = prompt("Введите пароль для входа");
if (password === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else if (password === null) {
  message = "Отменено пользователем!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}
alert(message);
