const users = require('./1-users.cjs')

let sortedUserArray = Object.entries(users).sort((a, b) => {
    if(
      (a[1].desgination.includes("Senior") && b[1].desgination.includes("Senior")) || 
      (a[1].desgination.includes("Developer") && b[1].desgination.includes("Developer")) ||
      (a[1].desgination.includes("Intern") && b[1].desgination.includes("Intern"))
    ) {
      if(a[1].age === b[1].age) {
        return 0
      }
      else if(a[1].age > b[1].age) {
        return -1;
      }
      else {
        return 1;
      }
    }
    else if(a[1].desgination.includes("Senior")) {
        return -1
    } 
    else if(b[1].desgination.includes("Senior")) {
      return 1;
    }
    else if(a[1].desgination.includes("Developer")) {
      return -1;
    }
    else if(b[1].desgination.includes("Developer")) {
      return 1
    }
    return 0
  });
  console.log(Object.fromEntries(sortedUserArray));
