"use client";

import { FormEvent, useMemo, useState } from "react";
import styles from "./MainForm.module.scss";
import { formatSentence } from "@/lib/format";
import Ruler from "./Ruler";

const MainForm = () => {
  const [inputSentence, setInputSentence] = useState("");
  const [outputSentence, setOutputSentence] = useState("");
  const [printWidth, setPrintWidth] = useState(32);

  const count = useMemo(() => inputSentence.length, [inputSentence]);

  const countWithoutBreaks = useMemo(
    () => inputSentence.replace(/[\n\t 　]/g, "").length,
    [inputSentence]
  );

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const onClick = () => {
    const formatted = formatSentence(inputSentence, printWidth);
    setOutputSentence(formatted);
  };

  const maxWidth = 40;

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.textareaWrapper}>
        <div>
          <header className={styles.textareaHeader}>
            <h3 className={styles.textareaDescription}>原文</h3>
            <div>
              {count} 文字（改行・スペースなし：{countWithoutBreaks} 文字）
            </div>
          </header>
          <textarea
            className={styles.input}
            value={inputSentence}
            onChange={(e) => setInputSentence(e.currentTarget.value)}
          />
          <div className={styles.rulerWrapper}>
            <Ruler value={printWidth} max={maxWidth} setValue={setPrintWidth} />
          </div>
          <div className={styles.buttonWrapper}>
            <button onClick={onClick}>幅 {printWidth} 文字で整形</button>
          </div>
        </div>
        <div>
          <header className={styles.textareaHeader}>
            <h3 className={styles.textareaDescription}>整形後テキスト</h3>
          </header>
          <textarea
            className={styles.output}
            value={outputSentence}
            onChange={(e) => setOutputSentence(e.currentTarget.value)}
          />
        </div>
      </div>
    </form>
  );
};

export default MainForm;
