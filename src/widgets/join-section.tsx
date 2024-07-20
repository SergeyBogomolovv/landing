import {
  Section,
  SectionButton,
  SectionContent,
  SectionDescription,
  SectionImage,
  SectionTitle,
} from "@/shared/ui/section";

const JoinSection = () => {
  return (
    <Section>
      <SectionImage src="/undraw_updated_resume_re_7r9j.svg" />
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
export default JoinSection;
