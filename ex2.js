'use strict';


/*Tehke objekt person, kellel on väli name ja meetod getName(), mis tagastab nime.
     Konstruktorile saab argumendiga nime ette anda.

     var person = new Person("Jack");
     console.log(peron.getName()); // Jack

     Proovige panna meetodit nii objekti, kui prototüübi külge.
     Veenduge, et meetod on õiges kohas (vihjed: Object.keys() ja __proto__).*/

function Person() {
    this.name = undefined;
    this.getName = function () {
        console.log('Name is ' + this.name);
    }
}
var person = new Person();
person.name = 'Judy';
person.getName();

Person.prototype.getName = function () {
  console.log('Prototype name is ' + this.name);
};
var person2 = new Person();
person2.name = 'Judy2';
person2.getName();

console.log(Object.keys(new Person()));