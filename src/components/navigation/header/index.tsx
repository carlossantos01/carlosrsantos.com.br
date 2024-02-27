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
        <div className="w-full h-full max-w-5xl m-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/icons/icon64x64.png"
              alt="Carlos Santos"
              width={45}
              height={45}
            />
            <h1 className="font-frutigerSemibold text-xl text-scorpionGrey">
              Carlos Santos
            </h1>
          </div>
          <div className="flex items-center justify-between gap-8">
            <a href="/" className="font-frutiger text-md text-scorpionGrey">
              {t("home")}
            </a>
            <a
              href="/about"
              className="font-frutiger text-md text-scorpionGrey"
            >
              {t("about")}
            </a>
            <a
              href="/contact"
              className="font-frutiger text-md text-scorpionGrey"
            >
              {t("resume")}↗
            </a>
          </div>
        </div>
      </header>
    </TranslationsProvider>
  );
};

export default Header;
