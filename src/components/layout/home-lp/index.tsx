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
      <div className="max-w-4xl m-auto p-4 flex flex-col md:flex-row justify-between items-center mt-2 md:mt-16">
        <div className="flex flex-col">
          <h1 className="font-frutiger text-xl text-scorpionGrey">
            {t("title")}
          </h1>
          <h1 className="font-frutigerBold text-4xl">{t("description")}</h1>
          <div className="mt-4 flex flex-col">
            <span className="text-scorpionGrey">
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
            <span className="text-scorpionGrey">
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
            {/* <span className="text-scorpionGrey">
              {t("bootcamp")}{" "}
              <a
                href="https://www.fiap.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blueKenzie"
              >
                Kenzie Academy↗
              </a>
            </span> */}
            {/* <span className="text-scorpionGrey">
              {t("technical")}{" "}
              <a
                href="https://www.fiap.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-greenIFSP"
              >
                IFSP↗
              </a>
            </span> */}
            <div className="flex mt-4 gap-3">
              <CustomButton
                icon="/assets/icons/github.svg"
                color="red"
                href="https://github.com/carlossantos01"
                alt="GitHub"
              />
              <CustomButton
                icon="/assets/icons/linkedin.svg"
                color="red"
                href="https://www.linkedin.com/in/carloseorsantos/"
                alt="linkedin"
              />
            </div>
          </div>
        </div>
        <div className="mt-6 md:mt-0">
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
