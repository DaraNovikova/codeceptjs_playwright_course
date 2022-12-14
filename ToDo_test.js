const assert = require('assert')

Feature('ToDo');

Scenario('test something', async ({ I }) => {
    I.amOnPage('/');
    I.waitForElement('.new-todo', 60);
    // within('.todoapp', () => {
    //     I.dontSeeElement('.todo-count');
    //     I.fillField('What needs to be done?', 'Task_1');
    //     I.pressKey('Enter');
    //     I.see('Task_1', '.todo-list');
    //     I.waitForElement('.toggle', 30);
    //     I.click('.toggle');
    // });
    I.dontSeeElement('.todo-count');
    I.fillField('What needs to be done?', 'Task_1');
    I.pressKey('Enter');
    I.see('Task_1', '.todo-list');
    I.waitForElement('.toggle', 60);
    I.click('.toggle');
    // pause();
    let numTodos = await I.grabTextFrom('.todo-count strong');
    assert.strictEqual('0', numTodos);
});
