import * as assert from 'assert';
import * as vs from 'vscode';
import * as sinon from 'sinon';


suite("Extension Tests", function () {
    test("functionToTest opens browser", function () {
        // Intercept vscode.open so we don't spawn browsers!
        const executeCommand = sinon.stub(vs.commands, "executeCommand").callThrough();
        const open = executeCommand.withArgs("vscode.open", sinon.match.any).resolves();

        // Call the function to test.
        functionToTest();

        // Ensure it attempted to open the browser.
        assert.equal(open.called, true);
    });
});

function functionToTest() {
    vs.commands.executeCommand("vscode.open", vs.Uri.parse("https://www.google.co.uk/"));
}
