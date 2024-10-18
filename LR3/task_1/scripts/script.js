let a = parseInt(prompt("Введите A"));
let b = parseFloat(prompt("Введите B"));
let c = parseFloat(prompt("Введите C"));

if (!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c)) {
    alert("Вы ввели не целое число");
}
else {
    if ((a <= b) == (b <= c))
        alert("Число " + b + " находится между " + a + " и " + c);
    else
        alert("Число " + b + " не находится между " + a + " и " + c);
}

 location.reload(); // Перезагрузка страницы
