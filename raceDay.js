let raceNumber = Math.floor(Math.random() * 1000);

//console.log(raceNumber)

let earlyRegister = false

let runnerAge = 27

if (earlyRegister === true && runnerAge > 18) {
    raceNumber = raceNumber += 1000
    console.log(raceNumber)
} else if (earlyRegister === false || runnerAge < 18) {
    console.log(raceNumber)
}

if (runnerAge > 18 && earlyRegister === true) {
    console.log("Your race number is " + raceNumber + " and your race is going to start at: 9:30 am.")
} else if (runnerAge > 18 && earlyRegister === false) {
    console.log("Your race number is " + raceNumber + " and your race is going to start at 11:00 am.")
} else if (runnerAge < 18) {
    console.log("Your race number is " + raceNumber + " and your race is going to start at 12:30 pm.")
} else {
    console.log("Go to registration desk to get your race number.")
}