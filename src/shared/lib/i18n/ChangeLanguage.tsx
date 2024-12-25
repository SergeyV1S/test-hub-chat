import { LanguagesIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

import { buttonVariants } from "@shared/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from "@shared/ui/select";

import { cn } from "../utils";

export const ChangeLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Select onValueChange={changeLanguage} defaultValue={i18n.language}>
      <SelectTrigger
        className={cn(
          buttonVariants({ variant: "ghost", size: "icon" }),
          "border-0 shadow-none p-0 focus:ring-0"
        )}
        withoutChevron={true}
      >
        <LanguagesIcon />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value='ru'>Русский</SelectItem>
          <SelectItem value='en'>English</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
