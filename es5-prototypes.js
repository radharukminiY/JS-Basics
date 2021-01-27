function employee(name){
    this.name = name;
    this.city="Paris"
}

function manager(name){
    this.name = name;
    this.city="Nice"
    this.salary=20000;
}

var Reddy = new employee('Reddy')

var Nani =  new manager('Nani')

employee.prototype = new manager()
var david =new employee('david')

op:
manager {name: undefined, city: "Paris", salary: 20000}

david.salary
20000
david.city
Nice

manager.prototype= new employee()
op: employee {name: undefined, city: "Paris"}

//
function power(base){
    return function(exp){
        return (base**exp);
    };
}
    var var1=power(2);
    var var2=power(3);

    var1(4)
    var2(3)
27
