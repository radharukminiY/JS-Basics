
//for loop
for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

var obj = ["Audi", "BMW", "Mumbai", "Pune", "Red", "Yellow"]
for(i=0;i<obj.length;i++){
    console.log(obj[i]) }

Audi
BMW
Mumbai
Pune
Red
Yellow

var obj = ["Audi", "BMW", "Delhi", ["Green", "Merc", "Mumbai", "Pune"], "Red", "Yellow"]
for(i=0;i<obj.length;i++){
    for(j=0;j<obj[i].length;j++){
        console.log(obj[i][j])
    }
}

Array.isArray([1,2])
true
Array.isArray('a')
false


//ifelse
var obj = ["Audi", "BMW", "Delhi", ["Green", "Merc", "Mumbai", "Pune"], "Red", "Yellow"]
for(i=0;i<obj.length;i++){
  if(Array.obj(myarry[i])){
    for(j=0;j<obj[i].length;j++){
        console.log(obj[i][j])
    }
}else{
        console.log(myarry[i])
    }

}

//while loop

}
var i = 10
while(i<5){
    console.log(i)
    i++
}

//do-while
undefined
var i = 10
do{
    console.log(i)
    i++
}
while(i<5)
10
10

//for of
var city = ["London","Delhi","Amsterdam","Paris","Boston"]
for(mycity of city){
    console.log(mycity)
}

var city = ["London","Delhi",["Red","Green","Orange"],"Paris","Nice"]
for(mycity of city){
    if(Array.isArray(mycity)){
        for(cities of mycity){
            console.log(cities)
        }
    }else{
        console.log(mycity)
    }
}
