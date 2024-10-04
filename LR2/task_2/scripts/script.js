let number = parseInt(prompt("Введите двузначное число"));
let digit1 = parseInt(number/10);
let digit2 = parseInt(number%10);
alert("Двузначное число = " + number + "\nСумма цифр = " + (digit1+digit2) + "\nПроизведение цифр = " + (digit1*digit2));
