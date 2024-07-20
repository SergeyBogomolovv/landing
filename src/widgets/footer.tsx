import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>
        Предложение стажировки, её сроки и размер вознаграждения определяются по
        итогам собеседования и выполнения кандидатом тестовых заданий. Кандидату
        не гарантируется трудоустройство и соответствие вознаграждения его
        ожиданиям.
      </div>
      <div>© ООО «Яндекс», 2024</div>
    </footer>
  );
};

export default Footer;
