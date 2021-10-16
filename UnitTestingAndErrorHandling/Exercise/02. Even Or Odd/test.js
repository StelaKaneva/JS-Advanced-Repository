const isOddOrEven = require('./02.EvenOrOdd');
const { expect } = require('chai');

describe('isOdOrEven Checker', () => {
    it('returns undefined with input different of string', () =>{
        expect(isOddOrEven(undefined)).to.be.equal(undefined);
        expect(isOddOrEven(null)).to.be.equal(undefined);
        expect(isOddOrEven(1)).to.be.equal(undefined);
        expect(isOddOrEven(true)).to.be.equal(undefined);
    });

    it('returns even when input string length is even', () =>{
        expect(isOddOrEven('mama')).to.be.equal('even');
    });

    it('returns odd when input string length is odd', () =>{
        expect(isOddOrEven('terassa')).to.be.equal('odd');
    });

});