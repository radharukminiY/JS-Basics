/// ES5 > Ecma Script 5//
/// ES6 > Ecma Script 6//

//ES5//
var a ="Bonjour"
var b= 2
var c=true


var x="Bonsoir"
typeof(x)
"string"

var y=5
typeof(y)
"number"

var z=false
typeof(z)
"boolean"

var t="50"
typeof(t)
"string"

var s='20'
typeof(s)
"string"

////

var x=5
var y=3
undefined
x+y(addition/sum)
8
x-y
2
x*y
15
x/y
1.66666666666
x%y
2

9%3
0
9%4
1
9%5
4
9%9
0

5%9
5// here 2 second value is higher always gives first value as output


////string operations
var a="Bonjour"
var b="js"
undefined
a+b
"Bonjour js"
a-b
NaN(not a number)
a*b
NaN
a/b
NaN
a%b
NaN

var x=6
var y="ok"
undefined
x+y //number+string=string
"6ok"
y+x  //string+number=string
"ok6"
y+y  //string+string= string
"okok"
x+x  //number+number=number
"12"
x-y
NaN

5+"4"+6 //"54+6"
"546"
"5"+4+6 //"54"+6
"546"
5+4+"6" //9+"6"
"96"

5+"4"+6-2 //"54+6"-2
"546"-2
544

"5"+4+6-1 //"54"+6-1
545
5+4+"6"-3 //9+"6"-3
"96"-3
93
'2'+3
"23"
'3'-2
1
'4'*3
12
'12'*2
24
'15'/2
7.5
'13'%3
1
'12'%2
0
'13'%'1'
0
12%'4'
0
'2c'-2
NaN
'4r'-'b'
NaN
4-'w'
NaN
var x=true
undefined
var y=true
undefined
x+y
2
var z=false
undefined
x+z
1
z+z
0
true is equal to 1
false is equal to 0

true+5
6
true+false
1
true-true
0
true*5
5
'hello'+true
"hellotrue"
'false'+'true'
'falsetrue'
'false'-'true'
NaN

//ES5
var a="4"
var b ="1"
undefined
a+b
"41"
parseInt(a)+parseInt(b)
5
var a="hello"
undefined
parseInt(a)
NaN

//ES5
var r="3.67"
var s="8.23"
undefined
r+s
"3,678.23"
parseInt(r)+parseInt(s)
11
parseInt(r)
3
parseFloat(r)
3.67
parseFloat(r)+parseFloat(s)
11.9


//ES6
var a="4.54"
var b="3.11"
undefined
Number(a)+Number(b)
7.65
