import TranslationsProvider from "@/components/providers/translations-provider";
import { Params } from "@/domain/model/params";
import initTranslations from "@/infrastructure/config/i18n/i18nConfig";

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
      <nav className="">
        <h1>{t("header.title")}</h1>
        <div className="">
          <nav>
            <ul>
              <li>
                <a href="/">{t("header.home")}</a>
              </li>
              <li>
                <a href="/about">{t("header.about")}</a>
              </li>
              <li>
                <a href="/contact">{t("header.resume")}</a>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </TranslationsProvider>
  );
};

export default Header;
