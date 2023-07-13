
import { executeRules } from '../src/index';

describe('test sad paths', () => {
    it('mxxx is NOT Monday and should return error', () => {
        const result = executeRules('mxxx')
        const correctResult = 'invalid input - names of the days must contain the letters of the days of the week'
        expect(result).toBe(correctResult)
    })

})

