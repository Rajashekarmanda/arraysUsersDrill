const users = require('./1-users.cjs')

console.log(Object.entries(users).filter(([key,val]) => val.nationality === 'Germany'))
