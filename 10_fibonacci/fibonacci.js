const fibonacci = function(x) {
    x = parseInt(x);
    if (x<0) {
        return("OOPS");
    }
    if (x==1){
        return 1;
    }
    else if (x==2){
        return 1;
    }else{
        return fibonacci(x-1) + fibonacci(x-2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
