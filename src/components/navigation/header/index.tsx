import CustomButton from "@/components/common/custom-button";
import TranslationsProvider from "@/components/providers/translations-provider";
import { Params } from "@/domain/model/params";
import initTranslations from "@/infrastructure/config/i18n/i18nConfig";
import Image from "next/image";

interface HeaderProps {
  params: Params;
}

const i18nNamespaces = ["header"];

const Header: React.FC<HeaderProps> = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <header className="w-full h-20 px-4">
        <div className="w-full h-full max-w-4xl m-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/icons/icon64x64.png"
              alt="Carlos Santos"
              width={45}
              height={45}
            />
            <h1 className="font-frutigerSemibold text-xl text-darkGrey hidden">
              Carlos Santos
            </h1>
          </div>
          <div className="flex items-center justify-between gap-4">
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
      </header>
    </TranslationsProvider>
  );
};

export default Header;
