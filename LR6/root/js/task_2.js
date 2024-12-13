const maxRandom = 100;
const minRandom = -maxRandom;
const precision = 2;

function randomize() {
    document.getElementById("input").value = getRandom().toFixed(precision);
    for (let i=0; i<getRandom(3, 14); i++)
        document.getElementById("input").value += ", " + getRandom().toFixed(precision);
    calculate();

}

function calculate() {
    let output = document.getElementById(("result"));
    try {
        let input = getNumbers(document.getElementById(("input")).value);
        output.innerHTML = String(getListOfAvg(input)).replace(/,/g, ", ");
    } catch (e) {
        output.innerHTML = "Некорректный ввод";
    }

}

function getListOfAvg(list) {
    result = [];
    for (i in list){
        console.log(i);
        result.push(getAvg(list, parseInt(i)).toFixed(precision));
    }
    return result;
}

function getAvg(list, index) {
    let result = 0;
    for (let i = 0; i <= index; i++) {
        result+=list[i];
    }
    return result/(index+1);
}


function getRandom(min = minRandom, max = maxRandom) {
    return Math.random() * (max - min) + min;
}

function getNumbers(str) {
    let numbers = str.replace("/ /g", "").split(",");
    let result = [];
    for (n in numbers){
        number = parseFloat(numbers[n])
        if (isNaN(numbers[n]) || isNaN(number) || !isFinite(number))
            throw Error("Not a number");
        result.push(number);
    }
    return result;
}