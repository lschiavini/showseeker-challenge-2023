import { getDayThatMatchesFirstOneLetter } from '../src/index';

describe('day tests', () => {
    it('m is Monday and that is = 2', () => {
        const result = getDayThatMatchesFirstOneLetter('m')
        const correctResult = '2'
        expect(result).toBe(correctResult)
    })
})

