import TranslationsProvider from "@/components/providers/translations-provider";
import { Params } from "@/domain/model/params";
import initTranslations from "@/infrastructure/config/i18n/i18nConfig";

interface FooterProps {
  params: Params;
}

const i18nNamespaces = ["footer"];

const Footer: React.FC<FooterProps> = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <footer className="w-full h-10 px-4 bottom-2 absolute">
        <div className="w-full h-full max-w-5xl m-auto text-center">
          <span className="font-frutiger text-xs text-darkGrey">
            {t("title", { year: new Date().getFullYear() })}
          </span>
        </div>
      </footer>
    </TranslationsProvider>
  );
};

export default Footer;
