"use client";
import CustomButton from "@/components/common/custom-button";
import { Params } from "@/domain/model/params";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface HomeLPProps {
  params: Params;
}

const i18nNamespaces = ["home"];

const HomeLP: React.FC<HomeLPProps> = ({ params: { locale } }) => {
  const { t } = useTranslation(i18nNamespaces);

  return (
    <section className="w-full h-full">
      <div className="max-w-4xl m-auto p-4 lg:p-0 flex flex-col md:flex-row justify-between items-center md:mt-16">
        <div className="flex flex-col">
          <h1 className="font-frutiger text-md md:text-xl text-scorpionGrey">
            {t("title")}
          </h1>
          <h1 className="font-frutigerBold text-2xl md:text-4xl">
            {t("description")}
          </h1>
          <div className="mt-2 md:mt-4 flex flex-col">
            <span className="text-scorpionGrey text-sm md:text-base">
              {t("workAt")}{" "}
              <a
                href="https://esparta.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-redEsparta"
              >
                Esparta↗
              </a>
            </span>
            <span className="text-scorpionGrey text-sm md:text-base">
              {t("collage")}{" "}
              <a
                href="https://www.fiap.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-redFiap"
              >
                FIAP↗
              </a>
            </span>
          </div>
        </div>
        <div className="mt-6 md:mt-0">
          <Image
            src="/assets/images/me.jpg"
            className="md:rounded-l-[50%] rounded-lg shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
            alt="Home LP Modal"
            width={350}
            height={300}
            unoptimized={true}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HomeLP;
