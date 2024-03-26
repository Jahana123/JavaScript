// Get the showcase element
const showcase = document.getElementById('showcase');

// Get all the buttons
const ac = document.getElementById('ac');
const brackets = document.getElementById('brackets');
const deleteBtn = document.getElementById('delete');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const subtract = document.getElementById('subtract');
const add = document.getElementById('add');
const decimal = document.getElementById('decimal');
const calculate = document.getElementById('calculate');

// Get all number buttons
const numbers = document.querySelectorAll('.number');

// Add event listeners for number buttons
numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (showcase.textContent === '0') {
            showcase.textContent = number.textContent;
        } else {
            showcase.textContent += number.textContent;
        }
    });
});

// Add event listener for AC button
ac.addEventListener('click', () => {
    showcase.textContent = '0';
});

// Add event listener for brackets button
brackets.addEventListener('click', () => {
    showcase.textContent += "()";
});

// Add event listener for delete button
deleteBtn.addEventListener('click', () => {
    showcase.textContent = showcase.textContent.slice(0, -1);
});

// Add event listener for divide button
divide.addEventListener('click', () => {
    showcase.textContent += '/';
});

// Add event listener for multiply button
multiply.addEventListener('click', () => {
    showcase.textContent += '*';
});

// Add event listener for subtract button
subtract.addEventListener('click', () => {
    showcase.textContent += '-';
});

// Add event listener for add button
add.addEventListener('click', () => {
    showcase.textContent += '+';
});

// Add event listener for decimal button
decimal.addEventListener('click', () => {
    if (!showcase.textContent.includes('.')) {
        showcase.textContent += '.';
    }
});

// Add event listener for calculate button
calculate.addEventListener('click', () => {
    try {
        const result = eval(showcase.textContent);
        showcase.textContent = result;
    } catch (error) {
        showcase.textContent = 'Error';
    }
});
