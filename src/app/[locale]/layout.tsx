import StartupThunkProvider from "@/components/providers/startup-thunk-provider";
import StoreProvider from "@/components/providers/store-provider";
import { Params } from "@/domain/model/params";
import { i18nConfig } from "@/infrastructure/config/i18n/i18nConfig";
import "@/infrastructure/theme/fonts.css";
import "@/infrastructure/theme/globals.css";
import { dir } from "i18next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  applicationName: "carlosrsantos.com.br",
  title: "Carlos Santos - Software Engineer",
  icons: [
    {
      url: "/assets/icons/icon64x64.png",
      sizes: "64x64 32x32 24x24 16x16",
      type: "image/x-icon",
    },
    {
      url: "/assets/icons/icon192x192.png",
      type: "image/png",
      sizes: "192x192",
    },
    {
      url: "/assets/icons/icon512x512.png",
      type: "image/png",
      sizes: "512x512",
    },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: Params;
}

export const generateStaticParams = () => {
  return i18nConfig.locales.map((locale) => ({ locale }));
};

const RootLayout: React.FC<RootLayoutProps> = ({
  children,
  params: { locale },
}) => {
  return (
    <StoreProvider>
      <StartupThunkProvider>
        <html lang={locale} dir={dir(locale)}>
          <body>{children}</body>
        </html>
      </StartupThunkProvider>
    </StoreProvider>
  );
};

export default RootLayout;
