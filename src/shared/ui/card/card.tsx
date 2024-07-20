import Image from "next/image";
import styles from "./card.module.css";

export const Card = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={styles.card} {...props}>
      {props.children}
    </div>
  );
};

interface CardImageProps {
  src: string;
  alt: string;
}

export const CardImage = ({ src, alt }: CardImageProps) => {
  return (
    <Image
      className={styles.image}
      src={src}
      alt={alt}
      width={60}
      height={60}
    />
  );
};

export const CardHeader = (props: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2 className={styles.heading} {...props}>
      {props.children}
    </h2>
  );
};

export const CardDescription = (
  props: React.HTMLAttributes<HTMLParagraphElement>,
) => {
  return (
    <p className={styles.description} {...props}>
      {props.children}
    </p>
  );
};
