import inquirer from "inquirer";
import chalk from "chalk";

class Player {
    name: string
    fuel: number = 100
    constructor(name: string) {
        this.name = name
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease() {
        this.fuel = 100
    }
}
class Opponent {
    name: string
    fuel: number = 100
    constructor(name: string) {
        this.name = name
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease() {
        this.fuel = 100
    }
}

function scorePlayer(name: string, fuel: number) {
    console.log(chalk.bold.green(`${name} fuel is ${fuel}`))
}
function scoreOpponent(name: string, fuel: number) {
    console.log(chalk.bold.red(`${name} fuel is ${fuel}`))
}



let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Enter your name:"
})
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    choices: ["Skeleton", "Assassin", "Zombie"],
    message: "Select your opponent:"
})

let p1 = new Player(player.name)
let o1 = new Opponent(opponent.select)

do {
    if (o1.name === "Skeleton") {

        let ask = await inquirer.prompt({
            type: "list",
            name: "select",
            choices: ["Attack", "Drink Portion", "Run For Your Life..."],
            message: "Select any action:"
        })
        if (ask.select == "Attack") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.fuelDecrease()
                scorePlayer(p1.name, p1.fuel)
                scoreOpponent(o1.name, o1.fuel)
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Lose! Better Luck Next Time..."))
                    process.exit()
                }
            }
            if (num <= 0) {
                o1.fuelDecrease()
                scorePlayer(p1.name, p1.fuel)
                scoreOpponent(o1.name, o1.fuel)
                if (o1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Win"))
                    process.exit()
                }
            }
        }
        if (ask.select === "Drink Portion") {
            p1.fuelIncrease()
            console.log(chalk.bold.green.italic(`You Drink your Health Portion Your fuel is ${p1.fuel}`))
        }
        if (ask.select === "Run For Your Life...") {
            console.log(chalk.red.bold.italic("You Lose! Better Luck Next Time..."))
            process.exit()
        }
    }
    else if (o1.name === "Assassin") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "select",
            choices: ["Attack", "Drink Portion", "Run For Your Life..."],
            message: "Select any action:"
        })
        if (ask.select == "Attack") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.fuelDecrease()
                scorePlayer(p1.name, p1.fuel)
                scoreOpponent(o1.name, o1.fuel)
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Lose! Better Luck Next Time..."))
                    process.exit()
                }
            }
            if (num <= 0) {
                o1.fuelDecrease()
                scorePlayer(p1.name, p1.fuel)
                scoreOpponent(o1.name, o1.fuel)
                if (o1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Win"))
                    process.exit()
                }
            }
        }
        if (ask.select === "Drink Portion") {
            p1.fuelIncrease()
            console.log(chalk.bold.green.italic(`You Drink your Health Portion Your fuel is ${p1.fuel}`))
        }
        if (ask.select === "Run For Your Life...") {
            console.log(chalk.red.bold.italic("You Lose! Better Luck Next Time..."))
            process.exit()
        }
    }

    if (o1.name === "Zombie") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "select",
            choices: ["Attack", "Drink Portion", "Run For Your Life..."],
            message: "Select any action:"
        })
        if (ask.select == "Attack") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.fuelDecrease()
                scorePlayer(p1.name, p1.fuel)
                scoreOpponent(o1.name, o1.fuel)
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Lose! Better Luck Next Time..."))
                    process.exit()
                }
            }
            if (num <= 0) {
                o1.fuelDecrease()
                scorePlayer(p1.name, p1.fuel)
                scoreOpponent(o1.name, o1.fuel)
                if (o1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Win"))
                    process.exit()
                }
            }
        }
        if (ask.select === "Drink Portion") {
            p1.fuelIncrease()
            console.log(chalk.bold.green.italic(`You Drink your Health Portion Your fuel is ${p1.fuel}`))
        }
        if (ask.select === "Run For Your Life...") {
            console.log(chalk.red.bold.italic("You Lose! Better Luck Next Time..."))
            process.exit()
        }
    }
}
while (true)