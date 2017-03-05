'use strict';

/*Teil on kasutada funktsioon factorial(n, callback).
     Arvutage selle abil 5! ja printige see konsooli.
     Funktsiooni factorial ennast muuta ei tohi.*/








function factorial(n, callback) {
    if (n < 0) {
        throw 'illegal argument'
    }

    var result = 1;
    while (n > 0) {
        result *= n;
        n--;
    }

    callback(result);
}
console.log(factorial(5, callback));