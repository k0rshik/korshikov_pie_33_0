const a = 2.6;
const b = 5.1;

let x = parseFloat(prompt("Введите x"));

if (isNaN(x)) {
    alert("Вы ввели не число");
}
else {
    let y;
    switch (x) {
        case 1:
            y = a*Math.cos(x)**2-b*Math.sin(x**2);
            break;
        case 4:
            y = b*Math.log(x)+x**3;
            break;
        case 5:
            y = Math.sqrt(x**2+a*b);
            break;
        default:
            y = "Не определено";
    }
    
    alert("x = " + x + "\nf(x) = " + y);
}

 location.reload(); // Перезагрузка страницы
