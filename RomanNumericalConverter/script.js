let input = document.getElementById('number');
let button = document.getElementById('convert-btn');
let output = document.getElementById('output');

// Object of roman values
const romanObject = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
};

button.addEventListener('click', () => {
    let inputValue = parseInt(input.value);
    let convertedValue = "";
    let romanValues = Object.keys(romanObject);

    if (input.value.trim() === '') {
        output.innerHTML = "<p>Please enter a valid number</p>";
        input.value = "";
    } else if (isNaN(inputValue) || inputValue <= 0) {
        output.innerHTML = "<p>Please enter a number greater than or equal to 1</p>";
        input.value = "";
    } else if (inputValue >= 4000) {
        output.innerHTML = "<p>Please enter a number less than or equal to 3999</p>";
    } else {
        romanValues.forEach(element => {
            while (romanObject[element] <= inputValue) {
                inputValue -= romanObject[element];
                convertedValue += element;
            }
        });

        output.innerHTML = convertedValue;
    }
});
