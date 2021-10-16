const lookupChar = require('./03.CharLookup');
const { expect } = require('chai');

describe('isOdOrEven Checker', () => {
    it('returns undefined with incorrect input', () =>{
        expect(lookupChar(5, 5)).to.equal(undefined);
        expect(lookupChar('test', 'test')).to.equal(undefined);
        expect(lookupChar(null, 'test')).to.equal(undefined);
        expect(lookupChar('test', 3.3)).to.equal(undefined);
    });

    it('returns incorrect index', () =>{
        expect(lookupChar('school', 10)).to.equal('Incorrect index');
        expect(lookupChar('test', -2)).to.equal('Incorrect index');
    });

    it('works as expected with correct input', () =>{
        expect(lookupChar('school', 3)).to.equal('o');
        expect(lookupChar('test', 1)).to.equal('e');
    });
});