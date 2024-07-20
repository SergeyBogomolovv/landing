import { Card, CardDescription, CardHeader, CardImage } from "@/shared/ui/card";
import styles from "./awaits-list.module.css";

const AwaitsList = () => {
  return (
    <section className={styles.container}>
      <h1>Что ждёт стажёров</h1>
      <div className={styles.grid}>
        <Card>
          <CardHeader>Реальные задачи</CardHeader>
          <CardImage src="/mail.png" alt="mail" />
          <CardDescription>
            Поиск решений для сервисов, которые действительно полезны многим.
            Это сложно и интересно
          </CardDescription>
        </Card>
        <Card>
          <CardHeader>Поддержка и ментор</CardHeader>
          <CardImage src="/chat.png" alt="chat" />
          <CardDescription>
            У каждого стажёра есть наставник. Он помогает расти и поддерживает
          </CardDescription>
        </Card>
        <Card>
          <CardHeader>Топовые эксперты</CardHeader>
          <CardImage src="/heart.png" alt="heart" />
          <CardDescription>
            Стажировка в окружении лидеров IT‑индустрии
          </CardDescription>
        </Card>
        <Card>
          <CardHeader>Нетворкинг</CardHeader>
          <CardImage src="/books.png" alt="books" />
          <CardDescription>
            Полезные знакомства и новые возможности для развития карьеры
          </CardDescription>
        </Card>
      </div>
    </section>
  );
};

export default AwaitsList;
