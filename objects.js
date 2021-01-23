var bookname ="la belle image";
var bookrating="4";
var booklang="french";


var bookname ="lacamp";
var bookrating="3.5";
var booklang="french";


///Liternal Notation
var books={
  name:'la femme qui a tue',
  rating:4,
  lang:'french'
}

Undefined
books.name
"la femme qui a tue"
books.rating
4
books.lang
"french"

///
var books={
  name:'la femme qui a tue',
  rating:4,
  lang:'french'
}
undefined
books.type="romantic"
"romantic"
books
{name: "la femme qui a tue", rating: 4, lang: "french", type: "romantic"}
books.rating
4
books.rating=4.2
4.2
books
{name: "la femme qui a tue", rating: 4.2, lang: "french", type: "romantic"}
delete books.rating
true
books
{name: "la femme qui a tue", lang: "french", type: "romantic"}
books['name']
"la femme qui a tue"
books['type']
"romantic"
books
{name: "la femme qui a tue", lang: "french", type: "romantic"}
delete books['lang']
true


var books={
    "name" :"Herri-poter",
    "rating":4.5,
    "lang":"Eng"
}
undefined
for(a in books){
    console.log(books[a])
}
 Herri-poter
 4.5
 Eng

 var books={
    "name" :"Herri-poter",
    "rating":4.5,
    "lang":"Eng"
}
undefined
for(key in books){
    console.log(key)
}
 name
 rating
 lang

 var test = [{a:1},{b:2},{c:3}]

for(i=0;i<test.length;i++){
    for(key in test[i]){
        console.log(test[i][key])
    }
}
1
2
3
///
var books=[
  {
   "name" :"Herri-poter",
   "rating":4.5,
   "lang":"Eng"
},
{
"name" :"Catch-22",
"rating":4.2,
"lang":"Eng"
},
{
  "name" :"Moby Dick",
  "rating":4.2,
  "lang":"Eng"
}
]
for(i=0;i<books.length;i++){
    for(key in books[i]){
        //console.log(books[i][key])
        console.log(key)
    }
}

name
rating
lang
name
rating
lang
name
rating
lang
///var calc={
    sum:function(a,b){return a+b},
    sub:(a,b)=>{return a-b}
}
undefined
calc.sub(7,4)
3
calc.sub(3,2)
1
calc.sum(3,2)

5
var dbQuery = {
    find:(table)=> {return `Select * from ${table}`},
    insert:(table,data) => { return `Insert into ${table} name,city values(${data.name}, ${data.city})`}
}
undefined
dbQuery.find('Emp')
"Select * from Emp"
dbQuery.insert('Student',{name:'Nani',city:'Paris'})
"Insert into Student name,city values(Nani, Paris)"
