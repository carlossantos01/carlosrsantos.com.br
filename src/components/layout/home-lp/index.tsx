"use client";
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
      <div className="max-w-4xl m-auto flex justify-between items-center mt-16">
        <div className="flex flex-col">
          <h1 className="font-frutiger text-xl text-scorpionGrey">
            {t("title")}
          </h1>
          <h1 className="font-frutigerBold text-4xl">{t("description")}</h1>
          <div className="mt-4 flex flex-col">
            <span className="text-scorpionGrey">
              {t("workAt")}{" "}
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="text-redEsparta"
              >
                Esparta↗
              </a>
            </span>
            <span className="text-scorpionGrey">
              {t("collage")}{" "}
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="text-redFiap"
              >
                FIAP↗
              </a>
            </span>
          </div>
        </div>
        <div className="">
          <Image
            src="/assets/images/gif.gif"
            className="mix-blend-multiply"
            alt="Home LP Modal"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeLP;
