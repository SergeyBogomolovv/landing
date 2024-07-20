import Image from "next/image";
import styles from "./section.module.css";
import { Button } from "../button";
import { ButtonProps } from "../button/button";
import clsx from "clsx";

export const Section = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <section {...props} className={clsx(props.className, styles.container)}>
      {props.children}
    </section>
  );
};

export const SectionImage = ({
  alt = "hero image",
  src = "",
  className,
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <Image
      className={clsx(className, styles.image)}
      width={600}
      height={600}
      src={src}
      alt={alt}
    />
  );
};

export const SectionContent = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={clsx(props.className, styles.content)}>
      {props.children}
    </div>
  );
};

export const SectionTitle = (props: React.HTMLAttributes<HTMLHeadElement>) => {
  return (
    <h1 {...props} className={clsx(styles.title, props.className)}>
      {props.children}
    </h1>
  );
};

export const SectionDescription = (
  props: React.HTMLAttributes<HTMLParagraphElement>,
) => {
  return (
    <p {...props} className={clsx(styles.description, props.className)}>
      {props.children}
    </p>
  );
};

export const SectionButton = ({
  children,
  variant = "primary",
  size = "lg",
  ...props
}: ButtonProps) => {
  return (
    <Button variant={variant} size={size} {...props}>
      {children}
    </Button>
  );
};
