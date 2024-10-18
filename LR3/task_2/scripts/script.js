let num1 = parseFloat(prompt("Введите первое число"));
let num2 = parseFloat(prompt("Введите второе число"));


if (isNaN(num1) || isNaN(num2)) {
    alert("Вы ввели не число");
}
else {
    let message = "Первое число: " + num1 + "\nВторое число: " + num2 + "\n";
    if (num1 == num2)
        message += "Числа равны";
    else if (num1 < num2)
        message += "Первое число меньше";
    else
        message += "Второе число меньше";
    
    alert(message);
}

 location.reload(); // Перезагрузка страницы
