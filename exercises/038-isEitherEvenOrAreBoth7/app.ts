function isEitherEvenOrAreBoth7(num1: number, num2: number): boolean {
     if ((num1 % 2 === 0 || num2 % 2 === 0) || (num1 === 7 && num2 === 7)) {
        return true;
    } else {
        return false;
    }
}

let output = isEitherEvenOrAreBoth7(2, 3);
console.log(output); // --> true


