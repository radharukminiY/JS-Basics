//////////////
var a = 5
var b = 6
a+b
11

///
function add(a,b) {
    return a+b
}
undefined
add(3,5)
8
add('a','b')
"ab"
add(5,7)
12
add(10,20,30)
30

/////
function test(a,b) {
    var sum = a+b
    var sub = a-b
    return sum,sub
}

//
function test(a,b) {
    var sum = a+b
    var sub = a-b
    return sum,sub
}
undefined
test(2,4)
-2

function test(a,b) {
    var sum = a+b
    var sub = a-b
    var out=[sum,sub]
    return out
}
undefined
test(1,2)
(2) [3, -1]

//
method> when function  assign to variable

var add = function(a,b){
    return a+b
}
undefined
///
es6 > arrow function
var add = (a,b) => {return a+b}
undefined

///
function sayhello() {
    return "Hello To JS"
}
console.log(sayhello())


///
////IFFI////
(function(){
    console.log("Hi To JS")
}())

/////Genarator function ////
function loop(userinput) {
    for(i=0;i<userinput;i++){
        console.log(i)
    }
}

function * loop(userinput) {
    for(i=0;i<userinput;i++){
        yield i
    }
}

var data = loop(4)
undefined
data.next()
{value: 0, done: false}
data.next()
{value: 1, done: false}
data.next()
{value: 2, done: false}
data.next()
{value: 3, done: false}
data.next()
{value: undefined, done: true}
