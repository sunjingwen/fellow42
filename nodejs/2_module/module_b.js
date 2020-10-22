/* module.exports = function(x){
    console.log(x);
}; */

var Person = function(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.sayHello = function(){
    console.log('hello');
};
module.exports = Person;