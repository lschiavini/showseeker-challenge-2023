
const daysOfTheWeek = {
    1: 'sunday',
    2: 'monday',
    3: 'tuesday',
    4: 'wednesday',
    5: 'thrusday',
    6: 'friday',
    7: 'saturday'
}

function rule1(input: string) {

    console.log('rule1')
}

function rule2() {
    console.log('rule2')
}


function rule3() {
    console.log('rule1')
}

function rule4() {
    console.log('rule2')
}

function rule5() {
    console.log('rule2')
}

function rule6() {
    console.log('rule2')
}

function rule7() {
    console.log('rule2')
}

function sanitizeInput(input: string) {
    const lowerCase = input.trim().toLowerCase()
    const separatedByComma = lowerCase.split(',')
    separatedByComma.forEach((day) => {

    })
}

function getDayThatMatchesFirstOneLetter(singleDay: string) {
    const firstLetter = singleDay.charAt(0)
    const firstTwoLetters = singleDay.charAt(0) + singleDay.charAt(1);
    const days = Object.values(daysOfTheWeek)
    let daysThatMatch;
    days.filter((day) => {
        if (firstLetter === 't' || firstLetter === 's') {
            if (firstTwoLetters === day.charAt(0) + day.charAt(1)) {
                daysThatMatch.push(day)
            }
        } else {
            if (day.charAt(0) === firstLetter) {
                daysThatMatch.push(day)
            }
        }
        // if (day === 'sunday' || day === 'thrusday') {
        //     const firstTwoLetters = singleDay.charAt(0) + singleDay.charAt(1);
        //     if (firstTwoLetters === day.charAt(0) + day.charAt(1)) {
        //         daysThatMatch.push(day)
        //     }
        // } else {
        //     if (day.charAt(0) === firstLetter) {
        //         daysThatMatch.push(day)
        //     }
        // }
    });
    return daysThatMatch;
}

function executeRules(input: string) {
    let sanitizedInputs = sanitizeInput(input)

}

function main() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let input;
    readline.question('Days of the week: ', (daysString: string) => {
        input = daysString
        console.log(`input typed: ${input}`);
        executeRules(input)
        readline.close();
    });
}


main()