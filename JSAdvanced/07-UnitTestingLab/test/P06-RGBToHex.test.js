const rgbToHexColor = require('../P06-RGBToHex');
const { assert, expect, should } = require('chai');

describe('Test rgb-to-hex functionality', () => {
    it('Should pass when color is in range', () => {
        expect(rgbToHexColor(13, 14, 15)).to.equal("#0D0E0F");
    });

    it('Should pass when color is 0 0 0', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
    });

    it('Should pass when color is 255 255 255', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
    });

    it('Should pass if result is undefined for negative red color', () => {
        expect(rgbToHexColor(-15, 16, 18)).to.equal(undefined);
    });

    it('Should pass if result is undefined for negative green color', () => {
        expect(rgbToHexColor(15, -16, 18)).to.equal(undefined);
    });

    it('Should pass if result is undefined for negative blue color', () => {
        expect(rgbToHexColor(15, 16, -18)).to.equal(undefined);
    });

    it('Should pass if result is undefined for red color above 255', () => {
        expect(rgbToHexColor(275, 161, 180)).to.equal(undefined);
    });

    it('Should pass if result is undefined for green color above 255', () => {
        expect(rgbToHexColor(133, 268, 180)).to.equal(undefined);
    });

    it('Should pass if result is undefined for blue color above 255', () => {
        expect(rgbToHexColor(12, 161, 280)).to.equal(undefined);
    });

    it('Should pass if values are 255, 158, 170 in hex', () => {
        expect(rgbToHexColor(255, 158, 170)).to.equal("#FF9EAA");
    });
});