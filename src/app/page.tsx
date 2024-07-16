import { Button } from "@/shared/ui/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Button variant="secondary">Кнопка</Button>
    </main>
  );
}
