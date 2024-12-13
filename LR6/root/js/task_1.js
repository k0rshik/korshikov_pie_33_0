const maxRandom = 100;
const minRandom = -maxRandom;
const precision = 2;
let useNegative = false;

function randomize() {
    document.getElementById("input_a").value = getRandom().toFixed(precision);
    document.getElementById("input_b").value = getRandom().toFixed(precision);
    calculate();
}

function calculate() {
    let output = document.getElementById(("result"));
    try {
        let a = getNumber(document.getElementById("input_a").value);
        let b = getNumber(document.getElementById("input_b").value);
        if (!useNegative && (a < 0 || b < 0)){
            output.innerHTML = "Вы ввели отрицательное число";
            if (document.getElementById(("allow_negative")) == null)
                document.getElementById(("task")).insertAdjacentHTML("beforeend", `<button type="button" class="task__button" id="allow_negative" onClick="allowNegative();">Разрешить отрицательные числа</button>`);
        }
        else
            output.innerHTML = getMidLine(a, b).toFixed(precision);
    } catch (e) {
        output.innerHTML = "Вы ввели не число";
    }
}

function getMidLine(a, b){
    return (a + b) / 2;
}

function getRandom(min = useNegative ? minRandom : 0, max = maxRandom) {
    return Math.random() * (max - min) + min;
}

function getNumber(n) {
    number = parseFloat(n)
    if (isNaN(n) || isNaN(number) || !isFinite(number))
        throw Error("Not a number");
    return number;
}

function allowNegative() {
    useNegative = true;
    document.getElementById(("allow_negative")).remove();
    calculate();
}