import type { ComponentChildren } from "preact";

type ShowcaseProps = {
  icon: ComponentChildren;
  subtitle: string;
  title: string;
  imageHref: string;
  align?: string;
};

function Showcase({
  icon,
  subtitle,
  title,
  imageHref,
  align = "left",
}: ShowcaseProps) {
  const padding = {
    left: "pr-16",
    right: "pl-16",
  };

  const items = {
    left: "items-end",
    right: "items-start",
  };

  const text = {
    left: "text-right",
    right: "text-left",
  };

  return (
    <div
      className={`flex flex-col ${items[align as "left" | "right"]} ${
        padding[align as "left" | "right"]
      }`}
    >
      {icon}
      <p className={`${text[align as "left" | "right"]} text-md my-4 text-gray-600`}>
        {subtitle}
      </p>
      <h1
        className={`${
          text[align as "left" | "right"]
        } leading-normal text-4xl w-4/5 text-gray-100`}
      >
        {title}
      </h1>
      <img href={imageHref} />
    </div>
  );
}

export default Showcase;
