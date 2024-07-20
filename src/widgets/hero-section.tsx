import {
  Section,
  SectionButton,
  SectionContent,
  SectionDescription,
  SectionImage,
  SectionTitle,
} from "@/shared/ui/section";

export const HeroSection = () => {
  return (
    <Section>
      <SectionImage src="/undraw_coffee_time_e8cw.svg" />
      <SectionContent>
        <SectionTitle>Присоединяйтесь к стажировкам в Яндекс</SectionTitle>
        <SectionDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          provident doloribus molestias excepturi? Odit, culpa modi fuga aperiam
          dignissimos, quaerat voluptas voluptatum quisquam, exercitationem
          nulla amet dicta cum eveniet repellendus?
        </SectionDescription>
        <SectionButton>Хочу в Яндекс</SectionButton>
      </SectionContent>
    </Section>
  );
};
