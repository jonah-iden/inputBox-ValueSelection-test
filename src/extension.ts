// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('value-selection-test.testValueSelection', () => {
		const input_box = vscode.window.createInputBox();
		input_box.onDidChangeValue(value => {
			const firstSpace = value.indexOf(' ');
			input_box.valueSelection = [0, firstSpace >= 0 ? firstSpace : value.length - 1];
		});
		input_box.value = "some test value";
		input_box.show();


	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }
