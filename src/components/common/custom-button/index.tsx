"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface CustomButtonProps {
  icon: string;
  color: string;
  href: string;
  alt: string;
}

const i18nNamespaces = ["home"];

const CustomButton: React.FC<CustomButtonProps> = ({
  icon,
  color,
  href,
  alt,
}) => {
  const { t } = useTranslation(i18nNamespaces);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 "
    >
      <div className={`bg-${color} w-full h-full `}>
        <Image src={icon} alt={alt} width={30} height={30} />
      </div>
    </a>
  );
};

export default CustomButton;
