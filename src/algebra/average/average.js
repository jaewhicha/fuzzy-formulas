import CalculationException from '../../util/CalculationException'

export default function Average(array = []) {
    if (!Array.isArray(array)) {
        throw(new Error('Function parameter must be of type Array'));
    }

    if (array.length > 0) {
        return array.reduce((current, prev) => current + prev) / array.length
    } else {
        throw(new CalculationException('Cannot divide by zero, please add elements to the array', this))
    }
    
}