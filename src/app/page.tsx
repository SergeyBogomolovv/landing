import {
  Section,
  SectionButton,
  SectionContent,
  SectionDescription,
  SectionImage,
  SectionTitle,
} from "@/shared/ui/section";
import styles from "./page.module.css";

const images = [
  { src: "/yandex.png", alt: "slider image 2" },
  { src: "/young-yandex.jpg", alt: "slider image 1" },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <Section>
        <SectionImage src="/undraw_updated_resume_re_7r9j.svg" />
        <SectionContent>
          <SectionTitle>Присоединяйтесь к стажировкам в Яндекс</SectionTitle>
          <SectionDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            provident doloribus molestias excepturi? Odit, culpa modi fuga
            aperiam dignissimos, quaerat voluptas voluptatum quisquam,
            exercitationem nulla amet dicta cum eveniet repellendus?
          </SectionDescription>
          <SectionButton>Хочу в Яндекс</SectionButton>
        </SectionContent>
      </Section>
      <Section>
        <SectionContent>
          <SectionTitle>Присоединяйтесь к стажировкам в Яндекс</SectionTitle>
          <SectionDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            provident doloribus molestias excepturi? Odit, culpa modi fuga
            aperiam dignissimos, quaerat voluptas voluptatum quisquam,
            exercitationem nulla amet dicta cum eveniet repellendus?
          </SectionDescription>
          <SectionButton>Хочу в Яндекс</SectionButton>
        </SectionContent>
        <SectionImage src="/undraw_summer_1wi4.svg" />
      </Section>
      <Section>
        <SectionImage src="/undraw_coffee_with_friends_3cbj.svg" />
        <SectionContent>
          <SectionTitle>Найдете хороших друзей</SectionTitle>
          <SectionDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            provident doloribus molestias excepturi? Odit, culpa modi fuga
            aperiam dignissimos, quaerat voluptas voluptatum quisquam,
            exercitationem nulla amet dicta cum eveniet repellendus?
          </SectionDescription>
          <SectionButton>Хочу в Яндекс</SectionButton>
        </SectionContent>
      </Section>
      <Section>
        <SectionContent>
          <SectionTitle>Присоединяйтесь к стажировкам в Яндекс</SectionTitle>
          <SectionDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            provident doloribus molestias excepturi? Odit, culpa modi fuga
            aperiam dignissimos, quaerat voluptas voluptatum quisquam,
            exercitationem nulla amet dicta cum eveniet repellendus?
          </SectionDescription>
          <SectionButton>Хочу в Яндекс</SectionButton>
        </SectionContent>
        <SectionImage src="/undraw_learning_re_32qv.svg" />
      </Section>
    </main>
  );
}
