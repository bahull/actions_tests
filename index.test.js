const { add } = require('./index')

describe('index tests', () => {
    describe('add tests', () => {
        test('add returns a number', () => {
            const addResult = add(1, 2)
            expect(addResult).toEqual(3);
        })
    })
})