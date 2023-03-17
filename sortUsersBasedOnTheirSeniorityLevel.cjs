const users = require('./1-users.cjs')

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
let sortingByAgeAndRole = [], finalSortedUsers = []
Object.entries(users).map((eachCandidate) =>{
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
sortingByAgeAndRole.map((eachPerson) =>{
    delete eachPerson.seniorityLevel
    finalSortedUsers.push({[eachPerson.name]:eachPerson})
})
console.log(finalSortedUsers)
