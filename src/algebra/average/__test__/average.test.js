import CalculationException from '../../../util/CalculationException'
import Average from '../Average'

describe('Average function', () => {
    test('empty array throw CalculationException', () => {
        expect(
            () => {Average([])}
        ).toThrow()
        expect(
            () => {Average([])}
        ).toThrow('Cannot divide by zero, please add elements to the array')
    })
    test('empty non-array parameter to throw Error', () => {
        expect(
            () => {Average('test')}
        ).toThrow()
        expect(
            () => {Average('test')}
        ).toThrow('Function parameter must be of type Array')
    })
    test('Average of 2x2 array', () => {
        expect(Average([2, 2])).toBe(2)
    })
    test('Average of 3x3 array', () => {
        expect(Average([3, 3, 3])).toBe(3)
    })
    test('Average of 1,2,3 array', () => {
        expect(Average([1, 2, 3])).toBe(2)
    })
})
