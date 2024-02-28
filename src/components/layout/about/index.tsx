"use client";
import { Params } from "@/domain/model/params";
import { useTranslation } from "react-i18next";

interface AboutProps {
  params: Params;
}

const i18nNamespaces = ["about"];

const About: React.FC<AboutProps> = ({ params: { locale } }) => {
  const { t } = useTranslation(i18nNamespaces);

  return (
    <section className="w-full h-full">
      <div className="max-w-4xl w-full h-60 m-auto bg-greyishBrown mt-14 rounded-lg relative shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
        <div className="flex absolute left-3 top-3 gap-2">
          <div className="w-3 h-3 rounded-full bg-redClose hover:bg-borderRedClose cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-yellowMinimize hover:bg-borderYellowMinimize cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-greenExtend hover:bg-borderGreenExtend cursor-pointer" />
        </div>
        <div className="w-full h-full py-8 px-3">
          <span className="text-white font-frutigerLight">
            <span className="text-white font-frutiger">~</span> cat aboutme.txt
          </span>
          {/* <p className="text-white font-frutigerLight">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default About;
