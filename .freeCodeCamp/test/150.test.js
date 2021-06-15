const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const lastCommand = await getLastCommand();

    assert(lastCommand[0] === 'read' && lastCommand[1] === 'NAME' && lastCommand[2].op === '<' && lastCommand[3] === 'name.txt');
  });
});
