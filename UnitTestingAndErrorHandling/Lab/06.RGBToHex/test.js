const {expect} = require('chai');
const rgbToHexColor = require('./06.RGBToHex');

describe('RGB Converter', () => {
    it('converts white', () => {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
    });

    it('converts black', () => {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
    });

    it('converts SoftUni dark blue to #234465', () => {
        expect(rgbToHexColor(35, 68, 101)).to.be.equal('#234465');
    });

    it('returns undefined for missing parameters', () => {
        expect(rgbToHexColor(35)).to.be.undefined;
    });

    it('returns undefined for values out of range', () => {
        expect(rgbToHexColor(-1, -1, -1)).to.be.undefined;
    });

    it('returns undefined for values out of range', () => {
        expect(rgbToHexColor(256, 256, 256)).to.be.undefined;
    });

    it('returns undefined for invalid parameter type', () => {
        expect(rgbToHexColor('0', '0', '0')).to.be.undefined;
    });

    it(`returns undefined for more than 3 parameters`, () => {
        expect(rgbToHexColor(0, 0, 0, 0)).to.equals('#000000')
    });

    it(`invalid range red -> (-1, 0, 0) -> undefined`, () => {
        expect(rgbToHexColor(-1, 0, 0)).to.equals(undefined)
    });

    it(`invalid range green -> (0, -1, 0) -> undefined`, () => {
        expect(rgbToHexColor(0, 256, 0)).to.equals(undefined)
    });

    it(`invalid range blue -> (0, 0, -1) -> undefined`, () => {
        expect(rgbToHexColor(0, 0, -1)).to.equals(undefined)
    });

});