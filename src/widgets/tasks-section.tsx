import {
  Section,
  SectionButton,
  SectionContent,
  SectionDescription,
  SectionImage,
  SectionTitle,
} from "@/shared/ui/section";

const TasksSection = () => {
  return (
    <Section>
      <SectionContent>
        <SectionTitle>Будете решать интересные задачи</SectionTitle>
        <SectionDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          provident doloribus molestias excepturi? Odit, culpa modi fuga aperiam
          dignissimos, quaerat voluptas voluptatum quisquam, exercitationem
          nulla amet dicta cum eveniet repellendus?
        </SectionDescription>
        <SectionButton>Хочу в Яндекс</SectionButton>
      </SectionContent>
      <SectionImage src="/undraw_learning_re_32qv.svg" />
    </Section>
  );
};

export default TasksSection;
