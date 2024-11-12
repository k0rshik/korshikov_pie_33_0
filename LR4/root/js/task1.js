function onButtonClick() {
    let n = parseFloat(document.getElementById("input").value);

    if (!Number.isInteger(n)) {
        alert("Введите целое число");
        return;
    }
    else if (n < 1) {
        alert("Введите число больше 0");
        return;
    }

    let k = 0;
    message = "\n";
    for (let i=0; i < n; i+=2) {
        k+=1
        message += i + " "
    }
    document.getElementById("result").innerHTML="K = " + k + message;
}
