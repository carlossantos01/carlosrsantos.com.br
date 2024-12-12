"use client";
import { Params } from "@/domain/model/params";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface SkillsLPProps {
  params: Params;
}

const i18nNamespaces = ["home"];

const skills = [
  {
    title: "Typescript",
    icon: "/assets/icons/typescript-original.svg",
    color: "blue",
  },
  {
    title: "Javascript",
    icon: "/assets/icons/javascript-original.svg",
    color: "yellow",
  },
  {
    title: "React",
    icon: "/assets/icons/react-original.svg",
    color: "blue",
  },
  {
    title: "Next.js",
    icon: "/assets/icons/nextjs-original.svg",
    color: "black",
  },
  {
    title: "Tailwindcss",
    icon: "/assets/icons/tailwindcss-original.svg",
    color: "blue",
  },
  {
    title: "Java",
    icon: "/assets/icons/java-original.svg",
    color: "red",
  },
  {
    title: "Spring",
    icon: "/assets/icons/spring-original.svg",
    color: "green",
  },
];

const SkillsLP: React.FC<SkillsLPProps> = ({ params: { locale } }) => {
  const { t } = useTranslation(i18nNamespaces);

  const renderCarrossel = () => {
    return skills.map((skill, index) => (
      <li key={index} className="flex flex-col items-center md:gap-2 md:p-2">
        <Image src={skill.icon} alt={skill.title} width={45} height={45} />
      </li>
    ));
  };

  return (
    <section className="w-full h-full">
      <div className="max-w-4xl m-auto p-4 lg:p-0 flex flex-row justify-between items-center mt-4 md:mt-16 flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-6 md:[&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {renderCarrossel()}
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-6 md:[&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {renderCarrossel()}
        </ul>
      </div>
    </section>
  );
};

export default SkillsLP;
