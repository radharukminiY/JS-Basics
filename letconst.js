var => we can redeclare and reassign
let => we cannot redeclare but can reassign
const => we cannot redeclare nor reassign

//
var a = 20
a
20
var a = 22;
undefined
a
22
a=14
14

let b = 20
undefined
b
20
let b = 22
Uncaught SyntaxError: Identifier 'b' has already been declared
b = 22
22

const x = 30
undefined
const x = 40
VM2034:1 Uncaught SyntaxError: Identifier 'x' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM2034:1
x
30
x=45
VM2060:1 Uncaught TypeError: Assignment to constant variable.
