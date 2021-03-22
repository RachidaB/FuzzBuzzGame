function fizzBuzzGame(dataset) {
    var tab = [];
    var result = "";
    if(Array.isArray(dataset)) {
        return dataset;
    } else if(typeof dataset != "number") {
        return "You must enter a number !";
    } else {
        for(let i = 1; i <= dataset; i++) {
            if (i % 3 != 0 && i % 5 != 0) {
                result = i;
            }else {
                if (i % 3 == 0) {
                    result = "Fizz";
                }
                if (i % 5 == 0) {
                    result += "Buzz";
                }
            }
            tab[i - 1] = result ;
            result = "";
        }
        return tab;
    }  
}


console.log(fizzBuzzGame(35));
// console.log(fizzBuzzGame(fizzBuzzGame(20)));
// console.log(fizzBuzzGame("a"));
// console.log(fizzBuzzGame(fizzBuzzGame("g")));
