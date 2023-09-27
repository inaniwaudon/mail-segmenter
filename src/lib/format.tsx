import { loadDefaultJapaneseParser } from "budoux";

const parser = loadDefaultJapaneseParser();

const formatLine = (line: string, printWidth: number) => {
  const chanks = parser.parse(line);
  const splitedLines: string[] = [""];

  for (const chank of chanks) {
    if (splitedLines.at(-1)!.length + chank.length > printWidth) {
      splitedLines.push("");
    }
    splitedLines[splitedLines.length - 1] += chank;
  }
  return splitedLines;
};

export const formatSentence = (sentence: string, printWidth: number) => {
  return sentence
    .split("\n")
    .flatMap((line) => formatLine(line, printWidth))
    .join("\n");
};
