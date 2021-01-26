////
function hoist() {
  a = 20;
  var b = 100;
}

hoist();

console.log(a);
20
//Accessible as a global variable outside hoist() function


console.log(b);
//
Since b was declared, b is confined to the hoist() function scope.
We can't print it out outside the confines of the hoist() function.
 ReferenceError: b is not defined,

To avoid bugs,
always declare all variables at the beginning of every scope. [like below].
////
a = 5
var b = 10
console.log(add(a,b))

function add(first,second){
    return first+second
}
var a;
 15

//////
var a;
var b;
function add(first,second){
    return first+second
}

a = 10
b = 20
console.log(add(a,b))
 30
///
Hoisting is a JavaScript mechanism where variables,
and function declarations are moved to the top of their scope before code execution.
