import styles from "./page.module.css";
import MainForm from "@/components/MainForm";

const Page = () => {
  return (
    <main className={styles.main}>
      <MainForm />
    </main>
  );
};

export default Page;
