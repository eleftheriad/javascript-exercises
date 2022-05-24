const palindromes = function (s) {
    

    s = removePunctuation(s)
    s = s.replace(/\s/g, '');
    s = s.toLowerCase();
    console.log(s);

    var isPalindrome = true;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) != s.charAt(s.length - i - 1)){
            isPalindrome = false;
            return false;
        }
        
    }
    if (isPalindrome) {
        return true;
    }
};
function removePunctuation(string) {
    var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    return string.replace(regex, '');
  }
palindromes("Racecar!");
// Do not edit below this line
module.exports = palindromes;
