import { useTranslation } from "react-i18next";

import { ChangeLanguage } from "@shared/lib/i18n/ChangeLanguage";

const RootPage = () => {
  const { t } = useTranslation();

  return (
    <div className='flex min-h-svh'>
      <div className='m-auto flex items-center gap-4'>
        <p className='text-xl font-bold'>{t("root.title")}</p>
        <ChangeLanguage />
      </div>
    </div>
  );
};

export default RootPage;
