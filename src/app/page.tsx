import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          This is root page.
          <Link href={"/home"}>Go to Home</Link>
        </p>
      </div>
    </main>
  );
}
