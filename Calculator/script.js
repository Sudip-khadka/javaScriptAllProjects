//get all button and value from html 
const buttons= document.querySelectorAll('.number, .operator');
const display=document.getElementById('current');

// Disable division, addition, and multiplication buttons initially
document.querySelectorAll('.operator').forEach(operatorButton => {
    if (operatorButton.textContent === '/' || operatorButton.textContent === '+' || operatorButton.textContent === '*' || operatorButton.textContent === '%') {
        operatorButton.style.pointerEvents = 'none';
    }
});

// add click event listner to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Append button's text content to display
        previous.textContent += button.textContent;

        // Disable multiple selection of operators if it already exists
        let clearedText = previous.textContent;
        const operators = ['+', '-', '*', '/', '.'];
        const lastCharacter = clearedText.slice(-1);
        
        if (operators.includes(lastCharacter)) {
            // Disable operator buttons
            document.querySelectorAll('.operator').forEach(operatorButton => {
                operatorButton.style.pointerEvents = 'none';
            });
        } else {
            // Enable operator buttons
            document.querySelectorAll('.operator').forEach(operatorButton => {
                operatorButton.style.pointerEvents = 'auto';
            });
        }
    });
});




//show calculated answer
const showAnswer = () => {
    let clearedText = previous.textContent;

    // Define the list of operators
    const operators = ['+', '-', '*', '/','.','%'];

    // Remove all operators from the end of the string
    while (operators.includes(clearedText.slice(-1))) {
        clearedText = clearedText.slice(0, -1);
    }

    // Update the text content
    previous.textContent = clearedText;
    current.textContent = eval(clearedText);
}
// clear all answers
const clearAll=()=>{
    // Disable division, addition, and multiplication buttons initially
document.querySelectorAll('.operator').forEach(operatorButton => {
    if (operatorButton.textContent === '/' || operatorButton.textContent === '+' || operatorButton.textContent === '*' || operatorButton.textContent === '%') {
        operatorButton.style.pointerEvents = 'none';
    }
});
    current.textContent ="";
    previous.textContent =""

}
//clear last option
const clearLast=()=>{
    let clearedtext=previous.textContent.slice(0,-1);
    const lastCharacter=clearedtext.slice(-1);
    const operators=['+','-','*','/']
    if(operators.includes(lastCharacter)){
        clearedtext=previous.textContent.slice(0,-1);
    }
    previous.textContent=clearedtext;
    current.textContent=eval(clearedtext);
}
let sum=
document.write("Sum is")