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

function inputIsAPartOfDayString(input: string): boolean {
    console.log(input)
    let isAPartOfDayString = false;
    for (const day of daysOfTheWeek) {
        day.includes(input) ? isAPartOfDayString = true : isAPartOfDayString = false
        if (isAPartOfDayString) break;
    }
    return isAPartOfDayString
}

function getDashedDaysIsInCorrectFormat(dashedDays: string): boolean {
    const days = dashedDays.split('-')
    let allDaysInCorrectFormat = false;

    if (days.length !== 2) {
        allDaysInCorrectFormat = false;
    } else {
        for (const day of days) {
            allDaysInCorrectFormat = inputIsAPartOfDayString(day)
            if (allDaysInCorrectFormat) {
                console.log('Break on getDashedDaysIsInCorrectFormat')
                break;
            }
        }
    }
    return allDaysInCorrectFormat;
}

function sanitizeInput(input: string): string[] | string {
    if (input.match(/\d+/g)) return 'invalid input only letters, commas and dashes are allowed'
    if (input.includes(',') && input.length === 1) return 'invalid input must have more than one character'
    if (input.includes('-') && input.length === 1) return 'invalid input must have more than one character'
    const lowerCase = input.trim().toLowerCase()
    const separatedByComma = lowerCase.split(',')
    let allDaysInCorrectFormat = false;
    for (const day of separatedByComma) {

        if (day.includes('-')) {
            allDaysInCorrectFormat = getDashedDaysIsInCorrectFormat(day);
        } else {
            allDaysInCorrectFormat = inputIsAPartOfDayString(day);
        }

        if (allDaysInCorrectFormat) {
            console.log(`Break on sanitize input allDaysInCorrectFormat ${allDaysInCorrectFormat}`)
            break;
        }
        console.log('Here')
    }
    console.log(`allDaysInCorrectFormat ${allDaysInCorrectFormat}`)

    if (!allDaysInCorrectFormat) return 'invalid input - names of the days must contain the letters of the days of the week'
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

function getUniqueDays(day: string): string {
    const dayThatMatches = getDayThatMatchesFirstOneLetter(day)
    return `${dayThatMatches}`
}

function handleDashedDays(dashedDays: string): string {
    const newDays = dashedDays.split('-')
    let initDay = Number(getDayThatMatchesFirstOneLetter(newDays[0]))
    const endDay = Number(getDayThatMatchesFirstOneLetter(newDays[1]))
    let resultString = ''
    while (initDay !== endDay) {
        resultString += `${initDay},`
        initDay = initDay === 7 ? 1 : initDay + 1;
        if (initDay === endDay) resultString += `${initDay},`
    }
    resultString = resultString.substring(0, resultString.length - 1)
    return resultString
}

export function executeRules(input: string): string {
    let sanitizedInputs = sanitizeInput(input)
    if (typeof sanitizedInputs === 'string') return sanitizedInputs
    let endString = ''
    sanitizedInputs.forEach((day) => {
        let endStringCurrentSize = endString.length
        let innerEndString: string = ''
        if (!day.includes('-')) {
            innerEndString += getUniqueDays(day)
        } else {
            innerEndString += handleDashedDays(day)
        }
        if (innerEndString.length > 0 && endStringCurrentSize > 0) endString += ','
        endString += `${innerEndString}`
    })
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
        console.log(executeRules(input))
        readline.close();
    });
}


main()