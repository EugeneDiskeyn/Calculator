const calc = document.querySelector("div");
calc.addEventListener("click", calculate);
const result = document.querySelector("#result");

function calculate() {
    console.dir(event.target);
    if (event.target.type !== "button") {
        return;
    }
    const simbol = event.target.innerText;
    switch(simbol) {
        case("C"):
            result.innerText = "";
            break;
        case("="):
            result.innerText = eval(result.innerText);
            break;
        default:
            result.innerText += simbol;
    }        
}