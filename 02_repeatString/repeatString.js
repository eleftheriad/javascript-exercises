const repeatString = function(word, num) {
    if(num<0){
        return 'ERROR'
    }
    let new_word='';
    for (let i = 0; i < num; i++) {
        new_word = new_word + word        
    }
    return(new_word)
};
repeatString("hey", 3);
// Do not edit below this line
module.exports = repeatString;
