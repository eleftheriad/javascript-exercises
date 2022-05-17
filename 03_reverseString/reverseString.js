const reverseString = function(word) {
    let new_word = '';
    for (let i = 1; i < word.length+1; i++) {
        new_word = new_word + word.charAt(word.length - i)
    }
    return new_word
};

// Do not edit below this line
module.exports = reverseString;
