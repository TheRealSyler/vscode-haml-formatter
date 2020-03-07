import {
  DocumentFormattingEditProvider,
  TextDocument,
  Range,
  FormattingOptions,
  CancellationToken,
  ProviderResult,
  TextEdit,
  Position
} from 'vscode';
import { FormatHaml } from 'haml-formatter';

export class HamlFormattingProvider implements DocumentFormattingEditProvider {
  provideDocumentFormattingEdits(
    document: TextDocument,
    options: FormattingOptions,
    token: CancellationToken
  ): ProviderResult<TextEdit[]> {
    return [
      new TextEdit(
        document.validateRange(
          new Range(new Position(0, 0), new Position(document.lineCount + 1, 10))
        ),
        FormatHaml(document.getText(), { ...options })
      )
    ];
  }
}
