//Functions


function getReminder() {
    console.log("Water the plants.")
}

getReminder()

function greetInSpanish() {
    console.log("Buenas Tardes.")
}

greetInSpanish()

function sayThanks(name) {
    console.log("Thank you for your purchase " + name + "! We appreciate your business")
}

sayThanks()



function sayThanks(name) {
    console.log("Thank you for your purchase " + name + "! We appreciate your business")
}

sayThanks("Cole")

function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs") {
    console.log(`Remember to buy ${item1}`)
    console.log(`Remember to buy ${item2}`)
    console.log(`Remember to buy ${item3}`)
}

makeShoppingList()


function monitorCount(rows, columns) {
    return rows * columns
}


function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200
}

const numOfMonitors = monitorCount(5, 4)

console.log(numOfMonitors)

const totalCost = costOfMonitors(5, 4)

console.log(totalCost)


const plantNeedsWater = (day) => {
    if (day == "Wednesday") {
        return true;
    } else {
        return false
    }
}


console.log(plantNeedsWater("Wednesday"))

const plantNeedsWater = day => day === "Wednesday" ? true : false

console.log(plantNeedsWater("Wednesday"))