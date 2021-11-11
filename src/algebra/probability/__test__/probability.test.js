import Probability from "../probability"

describe('probability function', () => {
    test('zero total outcomes', () => {
        expect(
            () => {
                Probability(2, 0)
            }
        ).toThrow('Probability function params [total] must be a non-zero positive number and [target] must be a positive number.')
    })
    test('negative target outcomes', () => {
        expect(
            () => {
                Probability(-2, 4)
            }
        ).toThrow('Probability function params [total] must be a non-zero positive number and [target] must be a positive number.')
    })
    test('non-number params', () => {
        expect(
            () => {
                Probability('1', '4')
            }
        ).toThrow('Both params must be of type number')
    })
    test('normal number test', () => {
        expect(Probability(3, 4)).toBe(75)
    })
})