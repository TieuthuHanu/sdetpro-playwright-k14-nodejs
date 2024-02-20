for (let number = 0; number < 5; number++) {
    if (number === 3) {
        continue;
    }
    console.log("Number:", number);
}

/**
 * Output:
 * Number: 0
 * Number: 1
 * Number: 2
 * Number: 4
 */