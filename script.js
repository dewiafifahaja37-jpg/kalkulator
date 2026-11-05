const display = document.getElementById('display');
const hasilSpan = document.getElementById('hasil');

function appendValue(val) {
    if (display.innerText === '0' || display.innerText === 'Error') {
        display.innerText = val;
    } else {
        display.innerText += val;
    }
}

function clearDisplay() {
    display.innerText = '0';
    hasilSpan.innerText = '0';
}

function backspace() {
    if (display.innerText === 'Error' || display.innerText.length === 1) {
        display.innerText = '0';
    } else {
        display.innerText = display.innerText.slice(0, -1);
    }
}

function calculateResult() {
    try {
        let expression = display.innerText
            .replace(/×/g, '*')
            .replace(/÷/g, '/');
        let res = eval(expression);
        display.innerText = res;
        hasilSpan.innerText = res;
    } catch (e) {
        display.innerText = 'Error';
        hasilSpan.innerText = 'Error';
    }
}