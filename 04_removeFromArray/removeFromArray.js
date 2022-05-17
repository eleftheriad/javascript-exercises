const removeFromArray = function(array, ...args) {
    for(let j=0; j < args.length; j++){
        value = args[j]   
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if (element === value) {
                array.splice(i, 1); 
            }
        }
    }
        return array;
};
console.log(removeFromArray([1,2,3,4],3))

// Do not edit below this line
module.exports = removeFromArray;
