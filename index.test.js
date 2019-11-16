const { add } = require('./index')

descibe('index tests', () => {
    descibe('add tests', () => {
        test('add returns a number', () => {
            const addResult = add(1, 2)
            expect(addResult).toEqual(3);
        })
    })
})