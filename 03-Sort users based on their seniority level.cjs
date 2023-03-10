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

function sortingByKeyWordsMultiple(firstKey,secondKey){
    if (firstKey.seniorityLevel < secondKey.seniorityLevel){
        return 1
    }else if (firstKey.seniorityLevel > secondKey.seniorityLevel){
        return -1
    }else if (firstKey.age < secondKey.age){
        return 1
    }else if (firstKey.age > secondKey.age){
        return -1
    }else {
        return 0
    }
}
let sortingByAgeAndRole = []
let sortingSeniorityLevel = Object.entries(users).map((eachCandidate) =>{
    if (eachCandidate[1].desgination.includes('Senior')){
        eachCandidate[1].seniorityLevel = 100
        eachCandidate[1].name = eachCandidate[0]
    }else if (eachCandidate[1].desgination.includes('Developer')){
        eachCandidate[1].seniorityLevel = 75
        eachCandidate[1].name = eachCandidate[0]
    }else{
        eachCandidate[1].seniorityLevel = 50
        eachCandidate[1].name = eachCandidate[0]
    }
    sortingByAgeAndRole.push(eachCandidate[1])
})
sortingByAgeAndRole.sort(sortingByKeyWordsMultiple)
console.log(sortingByAgeAndRole)
