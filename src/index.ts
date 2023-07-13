const daysOfTheWeek = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'unknown'
];

type DaysOfTheWeek = {
    [key: string]: string;
};

const numbersOfTheWeek: DaysOfTheWeek = {
    'sunday': '1',
    'monday': '2',
    'tuesday': '3',
    'wednesday': '4',
    'thursday': '5',
    'friday': '6',
    'saturday': '7',
    'unknown': 'unknown'
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

export function getDayThatMatchesFirstOneLetter(singleDay: string): string {
    const firstLetter = singleDay.charAt(0)
    const firstTwoLetters = singleDay.charAt(0) + singleDay.charAt(1);
    let dayThatMatches: string = 'unknown';
    daysOfTheWeek.forEach((day) => {

        if (firstLetter === 't' || firstLetter === 's') {
            if (singleDay.length === 1 && firstLetter === 't') {
                dayThatMatches = daysOfTheWeek[2]
                return;
            } else if (singleDay.length === 1 && firstLetter === 's') {
                dayThatMatches = daysOfTheWeek[5]
                return;
            }
            else if (firstTwoLetters === day.charAt(0) + day.charAt(1)) {
                console.log('singleDay', singleDay)
                console.log('day', day)
                dayThatMatches = day
                return;
            }
        } else {
            if (day.charAt(0) === firstLetter) {
                dayThatMatches = day
                return;
            }
        }
    });
    return numbersOfTheWeek[dayThatMatches];
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