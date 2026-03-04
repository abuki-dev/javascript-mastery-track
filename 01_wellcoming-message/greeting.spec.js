const usergreeting = require('./greeting');

describe('usergreeting', () => {
    it('should return a welcome message for a given name', () => {
        expect(usergreeting('Alice')).toBe('Welcome Alice to Abuki Practices!');
    });
});