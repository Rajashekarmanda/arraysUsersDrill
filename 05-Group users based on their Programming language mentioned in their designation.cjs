const users = require('./1-users.cjs')

let usersGroupsOnLanguage = {}, diffLanguages = []
Object.entries(users).map(([name, details]) => {
    details.desgination.split(' ').map((eachUserLang) => {
        ((!diffLanguages.includes(eachUserLang) && eachUserLang != 'Intern' && eachUserLang != 'Developer' && eachUserLang != '-' && eachUserLang != 'Senior')) ? diffLanguages.push(eachUserLang) : ''
    })
})
Object.entries(users).map(([name, details]) => {
    diffLanguages.map((eachLang) => {
        if (details.desgination.includes(eachLang)) {
            usersGroupsOnLanguage[eachLang] = {}
            Object.entries(users).map(([key, val]) => ((val.desgination.includes(eachLang))) ? usersGroupsOnLanguage[eachLang][key] = val.desgination : '')
        }
    })
})
console.log(usersGroupsOnLanguage)