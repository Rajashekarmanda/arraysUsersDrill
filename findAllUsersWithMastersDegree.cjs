const users = require('./1-users.cjs')

let usersWithMasterDegree = []
Object.entries(users).filter((eachPerson) => ((eachPerson[1].qualification == 'Masters') ? usersWithMasterDegree.push({ [eachPerson[0]]: eachPerson[1] }) : ''))
console.log(usersWithMasterDegree)