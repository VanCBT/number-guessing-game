function runGame() {

    let guessString = '';
    let guessNumber = 0;
    let correct = false;
    let numTries = 0;

    const randomNumber = Math.random() * 100; //using const here instead of let is because you are only going to generate a random number one time per play.
    const randomInteger = Math.floor(randomNumber);
    const target = randomInteger + 1;

    // const target = Math.floor(Math.random() * 100 + 1; - could have written it this way as well.

    do {
        guessString = prompt('I am thinking of a number in the range 1 to 100. \n\nWhat is the number?') //\n\n is called an escape sequence. anytime you use \ in a string the character after has a special meaning. \n is a line break.
        guessNumber = +guessString; // + before converts this from a string to a number.
        numTries += 1;
        correct = checkGuess(guessNumber, target);
    } while (!correct);

    alert('You got it! The number was ' + target + '.\n\nIt took you ' + numTries + ' tries to guess corectly.');

}

function checkGuess(guessNumber, target) {
    let correct = false;

    if (isNaN(guessNumber)) {
        alert('You have not entered a number. \n\nPlease enter a number in the 1-100 range.');
    } else if ((guessNumber < 1) || (guessNumber >100)) {
        alert('Please enter an integer in the 1-100 range.');
    } else if (guessNumber > target) {
        alert('Your number is too large!');
    } else if (guessNumber < target) {
        alert('Your number is too small!');
    } else {
        correct = true;
    }
    return correct;

} 