function onButtonClick() {
    let a = parseFloat(document.getElementById("input_a").value);
    let b = parseFloat(document.getElementById("input_b").value);

    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        alert("Введите целые числа");
        return;
    }
    else if (a > b) {
        alert("A должно быть больше B");
        return;
    }

    let sum = 0;
    for (let i=a; i < b+1; i++) {
        sum+=i;
    }
    document.getElementById("result").innerHTML="Cумма целых чисел между " + a + " и " + b + ": " + sum;
}
