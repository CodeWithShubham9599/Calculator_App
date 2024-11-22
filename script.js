const inputBox = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

let input = "";

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === "AC") {
            // Clear input
            input = "";
            inputBox.value = "0";
        } else if (value === "DEL") {
            // Remove last character
            input = input.slice(0, -1);
            inputBox.value = input || "0";
        } else if (value === "=") {
            // Evaluate the expression
            try {
                input = eval(input).toString();
                inputBox.value = input;
            } catch (error) {
                inputBox.value = "Error";
                input = "";
            }
        } else {
            // Append button value to the input
            input += value;
            inputBox.value = input;
        }
    });
});
