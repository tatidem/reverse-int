module.exports = function reverse (n) {
    const reversedString = n.toString().split('').reverse().join('');
    return parseInt(reversedString);
}
