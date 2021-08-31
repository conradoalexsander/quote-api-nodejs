const { getRandomElement } = require('../../utils');

describe("Get Random Element", () => {
    it("Given a valid array should get a random element in an array", () => {
        const elements = [1, 2, 3, 4];
        var element = getRandomElement(elements);

        expect(element).not.toBeNull();
    })

    it("Given an empty array should not get an element", () => {
        const elements = [];
        var element = getRandomElement(elements);

        expect(element).toBeUndefined();
    })
})