let subtraction = (a, b) => {
    let total = a - b
    if (total < 0) {
        return console.log(`${b} is greater than ${a}`);
    } else {
        console.log(`addition of ${a} - ${b} = ${total}`);
    }
}

module.exports = {
    subtraction
}