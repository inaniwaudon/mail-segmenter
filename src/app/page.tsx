import styles from "./page.module.css";
import MainForm from "@/components/MainForm";

const Page = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>mail-segmenter</h1>
      <p className={styles.description}>
        <a href="https://developers-jp.googleblog.com/2023/09/budoux-adobe.html">
          BudouX
        </a>{" "}
        を活用して、文章を指定の文字数で区切ります。メールの作成等にどうぞ
      </p>
      <MainForm />
    </main>
  );
};

export default Page;
