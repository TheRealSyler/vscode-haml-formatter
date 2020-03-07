import { ExtensionContext, languages } from 'vscode';
import { HamlFormattingProvider } from './formatter';

export function activate(context: ExtensionContext) {
  context.subscriptions.push(
    languages.registerDocumentFormattingEditProvider(
      [
        { language: 'haml', scheme: 'file' },
        { language: 'haml', scheme: 'untitled' }
      ],
      new HamlFormattingProvider()
    )
  );
}

export function deactivate() {}
