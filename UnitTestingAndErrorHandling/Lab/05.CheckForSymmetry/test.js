const{expect} = require('chai');

const isSymmetric = require('./05.CheckForSymmetry');

describe('Symmetry checker', () => {

    it('returns true for symmetric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it('returns false for non-symmetric array', () => {
        expect(isSymmetric([1, 2, 2, 1, 6, 7, 9])).to.be.false;
    });

    it('returns false for non-array', () => {
        expect(isSymmetric(5)).to.be.false;
    });

    it('returns false for non-symmetric array with strings', () => {
        expect(isSymmetric(['a', 'b', 'c'])).to.be.false;
    });

    it('returns false for string parameter', () => {
        expect(isSymmetric('abba')).to.be.false;
    });

    it('returns false for non-symmetric array with numbers and strings', () => {
        expect(isSymmetric([1, 2, '1'])).to.be.false;
    });
});