const users = require('./1-users.cjs')

let germanyUsersArr = []
for (let [key, val] of Object.entries(users)) {
    (val.nationality === 'Germany') ? germanyUsersArr.push(key) : '' //(do nothing if false)
}
console.log(germanyUsersArr)