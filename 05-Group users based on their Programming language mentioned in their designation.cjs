const users = {
    "John": {
        age: 24,
        desgination: "Senior Golang Developer",
        interests: ["Chess, Reading Comics, Playing Video Games"],
        qualification: "Masters",
        nationality: "Greenland"
    },
    "Ron": {
        age: 19,
        desgination: "Intern - Golang",
        interests: ["Video Games"],
        qualification: "Bachelor",
        nationality: "UK"
    },
    "Wanda": {
        age: 24,
        desgination: "Intern - Javascript",
        interests: ["Piano"],
        qualification: "Bachaelor",
        nationality: "Germany"
    },
    "Rob": {
        age: 34,
        desgination: "Senior Javascript Developer",
        interest: ["Walking his dog, Cooking"],
        qualification: "Masters",
        nationality: "USA"
    },
    "Pike": {
        age: 23,
        desgination: "Python Developer",
        interests: ["Listing Songs, Watching Movies"],
        qualification: "Bachaelor's Degree",
        nationality: "Germany"
    }
}

let usersGroupsOnLanguage = {}

let diffLanguages = []

for (let [name, details] of Object.entries(users)){
    // console.log(details.desgination.split(' '))
    for (let each of details.desgination.split(' ')){
        if (each != 'Intern' && each != 'Developer' && each != '-' && each != 'Senior'){
            if (!diffLanguages.includes(each)){
                diffLanguages.push(each)
                usersGroupsOnLanguage[each]={}
            }
        }
    }
}
for (let [name,details] of Object.entries(users)){
    for (let eachLang of diffLanguages ) {
        if (details.desgination.includes(eachLang)){
            usersGroupsOnLanguage[eachLang] = {}

            for (let [key,val] of Object.entries(users)){
                if (val.desgination.includes(eachLang)){
                    usersGroupsOnLanguage[eachLang][key]= val.desgination
                }
            }
        }
    }
}
console.log(usersGroupsOnLanguage)