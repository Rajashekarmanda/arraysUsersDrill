const users = require('./1-users.cjs')

let germanyUsersArr = []
for (let [key,val] of Object.entries(users)){
    if (val.nationality === 'Germany'){
        germanyUsersArr.push(key)
    }
}
console.log(germanyUsersArr)