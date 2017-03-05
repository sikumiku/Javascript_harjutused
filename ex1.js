'use strict';

var array = [1, 2, 3, 4, 5, 6];

array.push(7, 8);

function getEvenNumbersSquared(array) {
     var evenNumbersSquared = [];
     for (var i = 0; i < array.length; i++) {
         var each = array[i];
         var eachsquared = array[i];
         if (each % 2 == 0) {
             eachsquared = each * each;
             evenNumbersSquared.push(eachsquared);
         }
     }
     return evenNumbersSquared;
}

console.log('Even numbers squared: ' + getEvenNumbersSquared(array));

//harjutus3
'use strict';




