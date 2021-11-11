import CalculationException from "../../util/CalculationException";

export default function Probability(target, total) {
    if (typeof target !== 'number' || typeof total !== 'number') {
        throw(new Error('Both params must be of type number'))
    }

    if (total > 0  && target >= 0) {
        return (target / total) * 100;
    } else {
        throw(new CalculationException('Probability function params [total] must be a non-zero positive number and [target] must be a positive number.'))
    }
}