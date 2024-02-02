"use client";
import { useTranslation } from "react-i18next";

interface AccountModalProps {}

const i18nNamespaces = ["account"];

const AccountModal: React.FC<AccountModalProps> = () => {
  const { t } = useTranslation(i18nNamespaces);

  return <div>{t("welcome", { firstname: "Teste" })}</div>;
};

export default AccountModal;
