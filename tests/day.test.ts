import { getDayThatMatchesFirstOneLetter } from '../src/index';

describe('day tests', () => {
    it('m is Monday and that is = 2', () => {
        const result = getDayThatMatchesFirstOneLetter('m')
        const correctResult = '2'
        expect(result).toBe(correctResult)
    })
    it('t is Tuesday and that is = 3', () => {
        const result = getDayThatMatchesFirstOneLetter('t')
        const correctResult = '3'
        expect(result).toBe(correctResult)
    })
    it('w is Wednesday and that is = 4', () => {
        const result = getDayThatMatchesFirstOneLetter('w')
        const correctResult = '4'
        expect(result).toBe(correctResult)
    })
    it('th is Thursday and that is = 5', () => {
        const result = getDayThatMatchesFirstOneLetter('th')
        const correctResult = '5'
        expect(result).toBe(correctResult)
    })
    it('f is Friday and that is = 6', () => {
        const result = getDayThatMatchesFirstOneLetter('f')
        const correctResult = '6'
        expect(result).toBe(correctResult)
    })
    it('s is Saturday and that is = 7', () => {
        const result = getDayThatMatchesFirstOneLetter('s')
        const correctResult = '7'
        expect(result).toBe(correctResult)
    })
    it('su is Sunday and that is = 1', () => {
        const result = getDayThatMatchesFirstOneLetter('su')
        const correctResult = '1'
        expect(result).toBe(correctResult)
    })

})

