var a = 20
switch(a%2){
    case 0:
        console.log(`Number ${a} is even`);
        break;
    case 1:
        console.log(`Number ${a} is odd`);
        break;
    default:
        console.log(`Number ${a} is unkown`);
}
op:4 Number 20 is even

///
var name = "Nina"

switch(name){
    case 'kasi':
        console.log(`Hi ${name} you are user`);
        break;
    case 'Nina':
        console.log(`Hi ${name} you are admin`)
        break;
    default:
        console.log(`Hi ${name} i dont know you`)
}
VM563:8 Hi Nina you are admin
////
switch(new Date().getDay()){
    case 0:
        console.log("Its Sunday")
        break;
    case 1:
        console.log("Its Monday")
        break;
    case 5:
        console.log("Its Friday")
        break;
    default:
        console.log("Wrong Input")
}

var out = new Date().getDay()
if(out==0){
    console.log("Its Sunday")
}else if(out==1){
    console.log("Its Monday")
}


--For multiple condition and multiple output (IF ELSE)
--For one condition and multiple output (SWITCH)
--For one condition and one output (Ternory)
