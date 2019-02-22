var expect = require('expect');
var {generateMessage} = require('./message');


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
