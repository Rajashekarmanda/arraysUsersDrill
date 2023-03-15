const users = require('./1-users.cjs')

let usersGroupsOnLanguage = {}
let diffLanguages = []
Object.entries(users).map(([name, details]) => {
    details.desgination.split(' ').map((each) => {
        if (each != 'Intern' && each != 'Developer' && each != '-' && each != 'Senior') {
            if (!diffLanguages.includes(each)) {
                diffLanguages.push(each)
            }
        }
    })
})
Object.entries(users).map(([name, details]) => {
    diffLanguages.map((eachLang) => {
        if (details.desgination.includes(eachLang)) {
            usersGroupsOnLanguage[eachLang] = {}
            Object.entries(users).map(([key, val]) => {
                if (val.desgination.includes(eachLang)) {
                    usersGroupsOnLanguage[eachLang][key] = val.desgination
                }
            })
        }
    })
})
console.log(usersGroupsOnLanguage)