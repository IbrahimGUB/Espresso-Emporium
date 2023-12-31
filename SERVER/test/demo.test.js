//jest test

describe('Demo Service', () => {
    describe('Test date', () => {
        test('When two dates are created instantly, these dates should be equal', () => {
            const d = new Date();
            expect(new Date()).toEqual(d);
        })
    })
})