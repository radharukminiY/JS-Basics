if(condition){
    //do something
}else{
    //do something
}


///
var a = 4368;
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
 Number 4368 is even


///
var a = 7695;
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 7695 is odd

////
var name= "reddy";


if(name == "reddy"){
    console.log(`Hi ${name} you are admin`)
}else if(name=="Lisa"){
    console.log(`Hi ${name} you are Super Admin`)
}else if(name=="Hitesh"){
    console.log(`Hi ${name} you are user`)
}else{
    console.log(`Hi ${name} i don't know you`)
}

Hi reddy you are admin

///
var name = "nina"
if(name=="nani" || name=="nina" || name=="Bhumika"){
    console.log(`Hi ${name} your welcome`)
}else{
    console.log(`Hi ${name} your not allowed`)
}

var name = "nina"
var role= "Admin"
if(name=="nani" && role=="Admin"){
    console.log(`Hi ${name} your welcome`)
}else{
    console.log(`Hi ${name} your not allowed`)
}

Hi nina your welcome
 Hi nina your not allowed

///
var name = "nani"
var role= "User"
if(name=="nani" && (role=="Admin"||role=="User")){
    console.log(`Hi ${name} your welcome`)
}else{
    console.log(`Hi ${name} your not allowed`)var a = 1
if(a){
    console.log("Hello")
}else {
    console.log(" Good Bye")
}

Hi nani your welcome
//
var a = 1
if(a){
    console.log("Hello")
}else {
    console.log(" Good Bye")
}
 Hello
///
var a = 0
if(a){
    console.log("Hello")
}else {
    console.log(" Good Bye")
}
}
  Good Bye
///
Ternary(single line if else condition)
///

var a = 10
a>10 ?"Hello":"byee"
"byee"
var a = 10
a==10 ?"Hello":"byee"
"Hello"
var a = 5
a==5 ?a+1:a-1
6
var a = 5
a>5 ?a+1:a-1
4
var a = 5
a==5 ?a+1:a-1?"Hello":"Byeee"
"Hello"
//
var a = 5
a>5 ?a+1:a-1?"Hii":"Byye"
"Hii"


///wrong
var a = 5
a==5 ?a+1:a-1?"Hello":"Byeee"
6 //is is wrong
