const users = require('./1-users.cjs')

let usersWithMasterDegree = []
Object.entries(users).filter((eachPerson) => {
    if (eachPerson[1].qualification=='Masters'){
        usersWithMasterDegree.push(eachPerson[1])
    }
})
console.log(usersWithMasterDegree)