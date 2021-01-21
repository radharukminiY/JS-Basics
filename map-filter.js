--map is use to iterate over the Array
--it always return same length of output array as your input array
-- it is use to apply logics (sum,mul,divide), return html, bind data

var a=[78,96,4,53,23,61]
a.map((data) => {console.log(data)})
 78
 96
 4
 53
 23
 61
(6) [undefined, undefined, undefined, undefined, undefined, undefined]

a.map((data) => {return data*2})
(6) [156, 192, 8, 106, 46, 122]
a.map((data) => {return `<p>${data}</p>`})
(6) ["<p>78</p>", "<p>96</p>", "<p>4</p>", "<p>53</p>", "<p>23</p>", "<p>61</p>"]

//
--filter is use to filter out the value
-- it may or may not return same length of output
--it only return those value for which condition/output is true


var b = [41,25,3,85,6,34,16,78]
undefined
b.filter((data) => {return data>25})
(4) [41, 85, 34, 78]

b.map((data) => {return data>25})
(8) [true, false, false, true, false, true, false, true]
var c=[7,5,3]
undefined
c.map((data) => {return data*2})
(3) [14, 10, 6]
c.filter((data) => {return data*2})
(3) [7, 5, 3]
