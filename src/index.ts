
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



function main() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let input;
    readline.question('Days of the week: ', (daysString: string) => {
        input = daysString
        console.log(`input typed: ${input}`);
        readline.close();
    });
}


main()