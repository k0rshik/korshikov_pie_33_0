
text = document.getElementById("text");
button1 = document.getElementById("button1");
button2 = document.getElementById("button2");
button3 = document.getElementById("button3");
button4 = document.getElementById("button4");

path = "";
updateScene();


function onButtonClick(button) {
    if (button === "1" || button === "2" || button === "3" || button === "4"){
        path += button;
        updateScene();
    }
    else 
        alert("Куда ты жмав?");
}

function updateScene() {
    switch (path) {
        case "":
            text.innerHTML = "Кое-что";
            button1.innerHTML = "1";
            button2.innerHTML = "2";
            button3.innerHTML = "3";
            button4.innerHTML = "4";
            break;
        

        case "1":
            text.innerHTML = "1";
            button1.innerHTML = "11";
            button2.innerHTML = "12";
            button3.innerHTML = "13";
            button4.innerHTML = "13";
            break;
        case "2":
            text.innerHTML = "2";
            button1.innerHTML = "21";
            button2.innerHTML = "22";
            button3.innerHTML = "23";
            button4.innerHTML = "24";
            break;
        case "3":
            text.innerHTML = "3";
            button1.innerHTML = "31";
            button2.innerHTML = "32";
            button3.innerHTML = "33";
            button4.innerHTML = "34";
            break;
        case "4":
            text.innerHTML = "4";
            button1.innerHTML = "41";
            button2.innerHTML = "42";
            button3.innerHTML = "43";
            button4.innerHTML = "44";
            break;
        default:
            path = "";
            updateScene();
            break;
    }
}

