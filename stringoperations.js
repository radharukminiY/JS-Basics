var city="paris"
undefined
city.toLowerCase()
"paris"
city.toUpperCase()
"PARIS"
city.length
5
city[0]
"p"
city[1]
"a"
var name="Paris"
undefined
name.trim()
"Paris"
var username="nani"
undefined
var username2="guduru"
undefined
username==username2
false
city.slice(1)
"aris"
city.slice(3)
"is"
city.slice(1,3)
"ar"
city.charAt(0).toUpperCase()
"P"
city.slice(1).toLowerCase()
"aris"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"Paris"
var a="rightnow i am in paris"
undefined
a.replace(/rightnow/g,'tommorow')
"tommorow i am in paris"
var name = " London .   "
undefined
name.replace(/ /g,'')
"London."
var name= "rr reddy"
undefined
name.replace(/ /g,'-')
"rr-reddy"
var a=15
undefined
var b=30
undefined
a+b
45
a.toString()+b.toString()
"1530"

slice(start,end?)
substring(start,end?)
substr(start,length?)

var name="nice"
undefined
name.slice(1)
"ice"
name.slice(2)
"ce"
name.slice(3)
"e"
name.substring(1)
"ice"
name.substr(1)
"ice"
name.slice(2,4)
"ce"
name.slice(1,4)
"ice"
name.slice(1,3)
"ic"
name.slice(0,3)
"nic"
name.substr(2,4)
"ce"
name.slice(-1)
"e"
name.slice(-2)
"ce"
name.substring(-1)
"nice"
name.substring(-2)
"nice"
name.slice(-1,-2)
""
name.slice(-2,-1)
"c"
name.slice(-2,1)
""
name.substring(-1,-2)
""
name.substring(1,-2)
"n"
name.substring(2,-2)
"ni"
name.substring(2,-4)
"ni"
name.substring(1,-4)
"n"
