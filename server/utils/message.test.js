var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');


describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var name = 'Preet';
        var text = 'Message';
        var res = generateMessage(name, text);

        expect(typeof res.createdAt).toBe('number');
        expect(res).toMatchObject({
            from: name,
            text
        });

    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'me';
        var longitude = 1;
        var latitude = 2;
        var res = generateLocationMessage(from, latitude, longitude);

        expect(typeof res.createdAt).toBe('number');
        expect(res).toMatchObject({
            from,
            url: 'https://www.google.com/maps?q=2,1'
        });
    });
});
