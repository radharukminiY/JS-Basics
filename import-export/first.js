let dbObj ={}

dbObj.users=[
    {
        name:'Reddy',
        city:'Paris'
    },
    {
        name:'Saru',
        city:'Nice'
    }
]

dbObj.dbQuery = {
    find:(table)=>{return `Select * from ${table}`},
    insert:(table,data) => {return `Insert into ${table} name,city values (${data.name},${data.city})`}
}

//es5
//module.exports = dbObj;

//es6
export default dbObj;
