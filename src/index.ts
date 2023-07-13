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

function sanitizeInput(input: string): string[] | string {
    if (input.match(/\d+/g)) return 'invalid input only letters, commas and dashes are allowed'
    if (input.includes(',') && input.length === 1) return 'invalid input must have more than one character'
    if (input.includes('-') && input.length === 1) return 'invalid input must have more than one character'
    const lowerCase = input.trim().toLowerCase()
    const separatedByComma = lowerCase.split(',')
    return separatedByComma
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
                dayThatMatches = daysOfTheWeek[6]
                return;
            }
            else if (firstTwoLetters === day.charAt(0) + day.charAt(1)) {
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

export function executeRules(input: string): string {
    let sanitizedInputs = sanitizeInput(input)
    if (typeof sanitizedInputs === 'string') throw sanitizedInputs
    let endString = ''
    sanitizedInputs.forEach((day) => {
        let endStringCurrentSize = endString.length
        let innerEndString: string = ''
        if (!day.includes('-')) {
            const dayThatMatches = getDayThatMatchesFirstOneLetter(day)
            innerEndString += `${dayThatMatches}`
        } else {
            const newDays = day.split('-')
            let initDay = Number(getDayThatMatchesFirstOneLetter(newDays[0]))
            console.log('initDay', initDay)
            const endDay = Number(getDayThatMatchesFirstOneLetter(newDays[1]))
            console.log('endDay', endDay)
            let splitDayString = ''
            while (initDay !== endDay) {
                innerEndString += `${initDay},`
                initDay = initDay === 7 ? 1 : initDay + 1;
                if (initDay === endDay) innerEndString += `${initDay},`
            }
            innerEndString = innerEndString.substring(0, innerEndString.length - 1)
        }
        if (innerEndString.length > 0 && endStringCurrentSize > 0) endString += ','
        endString += `${innerEndString}`
    })
    console.log(endString)
    return endString
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