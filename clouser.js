//enclose something
//local scope
//global scope


var a = 5;
function add(){
    var b = 10;
    return a+b
}
console.log("add()>>>",add())
console.log("a>>>",a)
console.log("b>>>>",b)
 add()>>> 15
a>>> 5
Uncaught ReferenceError: b is not defined
    at <anonymous>:8:21

    /* variable that can be access outside or inside the block scope is in global scope*/
    /* variable that cannot be access outside only inside the block scope is in local scope*/


    var a = 6;
    for(i=0;i<5;i++){
        let b = "hi"
        console.log(a+i+b)
    }
    console.log("a>>>",a)
    console.log("b>>>>",b);
     6hi
     7hi
     8hi
     9hi
     10hi
    a>>> 6
   Uncaught ReferenceError: b is not defined
        at <anonymous>:7:2

  //
  mul(3)(6)(9)

function mul(a,b,c){
    return a*b*c
}


function mul(a){
    return function(b){
        return function(c){
            return a*b*c
        }
    }
}
162             
