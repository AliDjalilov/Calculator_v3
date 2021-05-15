

function getOperator() {

  let answer = '';

  do {
    answer = prompt('Enter operator');

  } while (isOperatorValid(answer));

  return answer;
}


function isOperatorValid(str) {

  return str !== '+' && str !== '-' && str !== '*' && str !== '/'
}


function getOperandsCount() {

  let answer = '';

  do {
    answer = +prompt('Enter the number of operands ');

  } while (isNaN(answer));
  return answer;
}

function getOperandsCountValid(num) {

  return !isNaN(num) && num > 1 && num < 6;

}


function getOperand(index) {

  let answer = '';

  do {
    answer = +prompt('Operands', `${index}`);

  } while (isNumberOperandValid(answer));
  return answer;

}


function isNumberOperandValid(num) {

  return (isNaN(num));
}

function calculate(operator, a, b) {

  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
  }
}


const operator = getOperator();
const operandsCount = getOperandsCount();
let result = 0;
let expression = '';

for (let i = 0; i < operandsCount; i++) {
  const operand = getOperand(i + 1)

  if (i === 0) {

    result = operand;
    expression = operand;
  } else {
    result = calculate(operator, result, operand);
    expression += ` ${operator} ${operand} `

  }
}

alert(`${expression} = ${result}`);


