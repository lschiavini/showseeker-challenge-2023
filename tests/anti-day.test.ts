
import { executeRules } from '../src/index';

describe('test sad paths', () => {
    it('mxxx is NOT Monday and should return error', () => {
        const result = executeRules('mxxx')
        const correctResult = 'invalid input - names of the days must contain the letters of the days of the week'
        expect(result).toBe(correctResult)
    })

    it('m,t,w,x,z is NOT Alright and should return error', () => {
        const result = executeRules('m,t,w,x,z')
        const correctResult = 'invalid input - names of the days must contain the letters of the days of the week'
        expect(result).toBe(correctResult)
    })

    it('m,tuesdayz is NOT Alright and should return error', () => {
        const result = executeRules('m,tuesdayz')
        const correctResult = 'invalid input - names of the days must contain the letters of the days of the week'
        expect(result).toBe(correctResult)
    })

    it('m,tuesdaz is NOT Alright and should return error', () => {
        const result = executeRules('m, tuesdaz')
        const correctResult = 'invalid input - names of the days must contain the letters of the days of the week'
        expect(result).toBe(correctResult)
    })

})

