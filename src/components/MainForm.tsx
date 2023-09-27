"use client";

import { FormEvent, useState } from "react";
import styles from "./MainForm.module.scss";
import { formatSentence } from "@/lib/format";
import Ruler from "./Ruler";

const MainForm = () => {
  const [inputSentence, setInputSentence] = useState("");
  const [outputSentence, setOutputSentence] = useState("");
  const [printWidth, setPrintWidth] = useState(32);

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
          <h3 className={styles.textareaDescription}>原文</h3>
          <textarea
            className={styles.input}
            value={inputSentence}
            onChange={(e) => setInputSentence(e.currentTarget.value)}
          />
          <div className={styles.rulerWrapper}>
            <Ruler value={printWidth} max={maxWidth} setValue={setPrintWidth} />
          </div>
          <div className={styles.buttonWrapper}>
            <button onClick={onClick}>整形</button>
          </div>
        </div>
        <div>
          <h3 className={styles.textareaDescription}>整形後テキスト</h3>
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
