var a=[7,88,65,43,9]
undefined
var b=['rd','hii','76y']
undefined
var c=[true,false]
undefined
var city = ["London","Delhi","Amsterdam","Paris","Boston"]
undefined
city.length
5
typeof(city)
"object"
city[3]
"Paris"
city[0]
"London"
city[city.length-1]
"Boston"
city.push('Nice')

6
city
(6) ["London", "Delhi", "Amsterdam", "Paris", "Boston", "Nice"]
city.push('Bordeux')

7
city
(7) ["London", "Delhi", "Amsterdam", "Paris", "Boston", "Nice", "Bordeux"]
city.pop()
"Bordeux"
city.pop(0)
"Nice"
city.pop(5)
"Boston"
city.unshift('Mumbai')
5
city
(5) ["Mumbai", "London", "Delhi", "Amsterdam", "Paris"]
city.shift()
"Mumbai"
////
Push > add in the end of the Array
Unshift > add in the begining of th Array
Pop > remove last value of Array
unshift > remove first value from array

////

var city = ["Nice", "London", "Delhi", "Amsterdam", "Paris", "Boston"]
undefined
city.splice(2,2)
(2) ["Delhi", "Amsterdam"]
city
(4) ["Nice", "London", "Paris", "Boston"]
city.splice(3,0,'Newyork','Mumbai')
[]
city
(6) ["Nice", "London", "Paris", "Newyork", "Mumbai", "Boston"]
city.splice(2,0,'Delhi','Amsterdam')
[]
city
(8) ["Nice", "London", "Delhi", "Amsterdam", "Paris", "Newyork", "Mumbai", "Boston"]
city.splice(4,1,'Dubai','hyd')
["Paris"]
city
(9) ["Nice", "London", "Delhi", "Amsterdam", "Dubai", "hyd", "Newyork", "Mumbai", "Boston"]




///
var data = "i am learning javascript"

undefined
data.split('')
(24) ["i", " ", "a", "m", " ", "l", "e", "a", "r", "n", "i", "n", "g", " ", "j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
var a = "javascript"
undefined
a.split('')
(10) ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
var out = a.split('')
undefined
out
(10) ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
out.toString()
"j,a,v,a,s,c,r,i,p,t"
out.toString().replace(/,/g,'')
"javascript"


var myarr = ["Delhi","Mumbai",['Red','Yellow',['Audi','BMW','Merc'],"Green"],"Pune"]
undefined
myarr[2]
(4) ["Red", "Yellow", Array(3), "Green"]
myarr[2][2]
(3) ["Audi", "BMW", "Merc"]
myarr[2][2][1]
"BMW

var city = ["Nice", "London", "Delhi", "Amsterdam", "Paris", "Boston"]

city.flat()
(6) ["Nice", "London", "Delhi", "Amsterdam", "Paris", "Boston"]
city.flat(1)
(6) ["Nice", "London", "Delhi", "Amsterdam", "Paris", "Boston"]
city.flat(2)
(6) ["Nice", "London", "Delhi", "Amsterdam", "Paris", "Boston"]
city.sort()
(6) ["Amsterdam", "Boston", "Delhi", "London", "Nice", "Paris"]
city.reverse()
(6) ["Paris", "Nice", "London", "Delhi", "Boston", "Amsterdam"
