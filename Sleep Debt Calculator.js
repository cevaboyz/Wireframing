//Sleep Debt Calculator

const getSleepHours = (day) => {

    if (day === "monday") {
        return 8
    } else if (day === "tuesday") {
        return 7
    } else if (day === "wednesday") {
        return 6
    } else if (day === "thursday") {
        return 5
    } else if (day === "friday") {
        return 10
    } else if (day === "saturday") {
        return 8
    } else if (day === "sunday") {
        return 7
    } else {
        console.log("The day is not a valid day")

    }
};

const getActualSleepHours = () => {

    return getSleepHours("monday") +
        getSleepHours("tuesday") +
        getSleepHours("wednesday") +
        getSleepHours("thursday") +
        getSleepHours("friday") +
        getSleepHours("saturday") +
        getSleepHours("sunday")


}

console.log(getSleepHours("monday"))

console.log(getActualSleepHours())


const getIdealSleepHours = () => {

    let idealHours = 8;
    return idealHours * 7

}

const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours()
    let idealSleepHours = getIdealSleepHours()

    if (actualSleepHours === idealSleepHours) {
        console.log("You have got the perfect amount of sleep.")

    } else if (actualSleepHours > idealSleepHours) {
        console.log("You have got " + (actualSleepHours - idealSleepHours) + " more sleep than needed.")
    } else if (actualSleepHours < idealSleepHours) {
        console.log("You need some rest because you have slept " + (idealSleepHours - actualSleepHours) + " hours less than you should havethis week")
    } else {
        console.log("Error! something went wrong,  check your code")
    }

}

calculateSleepDebt();