// test with jest main with inputs like  
// m,t,w,th,f,s,su
// mon, tue, etc
// monday, tuesday, etc

describe('format tests', () => {
    it('m,t,w,th,f,s,su', () => {
        const result = executeRules('m,t,w,th,f,s,su')
        const correctResult = '2,3,4,5,6,7,1'
        expect(result).toBe(correctResult)
    })
})