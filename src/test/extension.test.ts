import * as assert from 'assert';
import * as vs from 'vscode';
import * as sinon from 'sinon';


suite("Extension Tests", function () {
    test("functionToTest opens browser", function () {
        // Call the function to test.
        functionToTest();

    });
});

function functionToTest() {
    vs.env.openExternal(vs.Uri.parse("https://www.google.co.uk/"));
}
