import TranslationsProvider from "@/components/providers/translations-provider";
import { Params } from "@/domain/model/params";
import initTranslations from "@/infrastructure/config/i18n/i18nConfig";
import Image from "next/image";

interface HomeProps {
  params: Params;
}

const i18nNamespaces = ["home", "account"];

const Home: React.FC<HomeProps> = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main>
        <Image
          src="/assets/icons/icon64x64.png"
          alt="Vercel Logo"
          width={72}
          height={16}
        />
      </main>
    </TranslationsProvider>
  );
};

export default Home;
