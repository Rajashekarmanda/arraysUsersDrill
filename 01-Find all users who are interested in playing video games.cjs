const users = require('./1-users.cjs')

let filterVideoGameUsers = []

Object.entries(users).filter((key) => {
   if (key[1].interests.includes('Video Games') || key[1].interests.join(' ').includes('Video Games')){
    filterVideoGameUsers.push(key)
   }
})

console.log(filterVideoGameUsers)




