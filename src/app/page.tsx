import styles from "./page.module.css";
import JoinSection from "@/widgets/join-section";
import FriendsSection from "@/widgets/friends-section";
import TasksSection from "@/widgets/tasks-section";
import { Slider } from "@/shared/ui/slider";
import AwaitsList from "@/widgets/awaits-list";
import Faq from "@/widgets/faq";

const images = [
  { src: "/yandex.png", alt: "slider image 2" },
  { src: "/young-yandex.jpg", alt: "slider image 1" },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <JoinSection />
      <Slider images={images} />
      <TasksSection />
      <AwaitsList />
      <FriendsSection />
      <Faq />
    </main>
  );
}
