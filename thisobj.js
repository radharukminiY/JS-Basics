var firstname = "Nani";
var lastname = "Reddy";

var salut = {
    firstname:'Kittu',
    lastname:'Kasi',
    greet:function(){
        return `Salut to ${firstname} ${lastname}`
    }
}

console.log(salut.greet())
Salut to Nani Reddy
///
var firstname = "Nani";
var lastname = "Reddy";

var salut = {
    firstname:'Kittu',
    lastname:'Kasi',
    greet:function(){
        return `Salut to ${this.firstname} ${this.lastname}`
    }
}

console.log(salut.greet())

Salut to Kittu Kasi
///

var kati = new Object();
kati.age = 20;
kati.city = "Paris"
kati.setCity=function(newCity){
    this.city = newCity
}
ƒ (newCity){
    this.city = newCity
}
kati.setCity("Nice")
undefined
kati.city
"Nice"

//constr
var kati = new Object();
kati.age = 20;
kati.city = "Paris"
kati.setAge=function(newAge){
    this.age = newAge
}
kati.setAge(25)
kati.newAge
25

var rinky = new Object();
rinky.age = 20;
rinky.city = "Paris"
rinky.setAge=function(newAge){
    this.age = newAge
}
var createAge = function(newAge){
    this.age = newAge
}

var kati = new Object();
kati.age = 20;
kati.city = "Paris"
kati.setAge=createAge

var rinky = new Object();
rinky.age = 20;
rinky.city = "Paris"
rinky.setAge=createAge
