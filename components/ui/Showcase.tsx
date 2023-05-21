import type { ComponentChildren } from "preact";
import Image from "deco-sites/std/components/Image.tsx";
import { asset } from "$fresh/runtime.ts";

type ShowcaseProps = {
  icon: ComponentChildren;
  subtitle: string;
  title: string;
  imageHref: string;
  align: "left" | "right";
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

  const alignImg = {
    left: "self-start",
    right: "self-end",
  };

  return (
    <div
      className={`flex flex-col mb-64 ${items[align]} ${padding[align]}`}
    >
      {icon}
      <p
        className={`${text[align]} text-md my-4 text-gray-600`}
      >
        {subtitle}
      </p>
      <h1
        className={`${
          text[align]
        } mb-12 leading-normal text-4xl w-4/5 text-gray-100`}
      >
        {title}
      </h1>
      <img
        className={alignImg[align]}
        src={asset(imageHref)}
      />
    </div>
  );
}

export default Showcase;
