RegExp
regular expression


var a = "bonjour"
undefined
a.match("^([a-z])$")
null
var a="b"
undefined
a.match("^([a-z])$")
(2) ["b", "b", index: 0, input: "b", groups: undefined]
var a = "bonjour"
undefined
a.match("^([a-z]{2})$")

null
a.match("^([a-z]{2})$")
null
a.match("^([a-z]+)$")
(2) ["bonjour", "bonjour", index: 0, input: "bonjour", groups: undefined]
a.match("^([a-z]+)$")
(2) ["bonjour", "bonjour", index: 0, input: "bonjour", groups: undefined]
a.match("^([a-zA-Z0-9]{8,15})$")
null
var a = 9357688
undefined
a.match("^([0-9]{10})$")a.match("^([0-9]{10})$")
VM1838:1 Uncaught SyntaxError: Unexpected identifier
a.toString().match("^([0-9]{10})$")
null
var a = 99896547580
undefined
a.toString().match("^([0-9]{10})$")
null
var a = 9989898980
undefined
a.toString().match("^([0-9]{10})$")
(2) ["9989898980", "9989898980", index: 0, input: "9989898980", groups: undefined]
var email = "email@email.com"
undefined
email.match("^([a-zA-Z0-9#]+)@([a-zA-Z0-9#]+)\.([a-zA-Z]{2,5})$")


(4) ["email@email.com", "email", "email", "com", index: 0, input: "email@email.com", groups: undefined]
