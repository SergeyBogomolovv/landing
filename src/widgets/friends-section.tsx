import {
  Section,
  SectionButton,
  SectionContent,
  SectionDescription,
  SectionImage,
  SectionTitle,
} from "@/shared/ui/section";

const FriendsSection = () => {
  return (
    <Section>
      <SectionImage src="/undraw_coffee_with_friends_3cbj.svg" />
      <SectionContent>
        <SectionTitle>Найдете хорошую компанию</SectionTitle>
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

export default FriendsSection;
