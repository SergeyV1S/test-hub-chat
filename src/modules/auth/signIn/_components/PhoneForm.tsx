import { zodResolver } from "@hookform/resolvers/zod";
import type { TFunctionNonStrict } from "i18next";
import { useForm } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import type { z } from "zod";

import { Button } from "@shared/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@shared/ui/form";
import { Input } from "@shared/ui/input";
import { PasswordInput } from "@shared/ui/password-input";

import { signInPhoneSchema } from "../lib/signInPhoneSchema";

interface PhoneFormProps {
  onSubmit: (values: z.infer<typeof signInPhoneSchema>) => Promise<void>;
  switchForm: () => void;
  isPending: boolean;
  t: TFunctionNonStrict<"translation", undefined>;
}

export const PhoneForm = ({ onSubmit, switchForm, isPending, t }: PhoneFormProps) => {
  const signInPhoneForm = useForm<z.infer<typeof signInPhoneSchema>>({
    resolver: zodResolver(signInPhoneSchema),
    defaultValues: {
      phone: "",
      password: ""
    }
  });

  return (
    <Form {...signInPhoneForm}>
      <form onSubmit={signInPhoneForm.handleSubmit(onSubmit)} className='grid gap-4'>
        <FormField
          control={signInPhoneForm.control}
          name='phone'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("general.phone")}</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder={t("general.phone")}
                  format='+7 (###) ### ## ##'
                  mask='_'
                  component={PatternFormat}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={signInPhoneForm.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("general.password")}</FormLabel>
              <FormControl>
                <PasswordInput autoComplete='off' placeholder={t("general.password")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button onClick={switchForm} size='sm' variant='link' type='button'>
          {t("sign-in.sign_in_with_email")}
        </Button>
        <Button
          disabled={
            !signInPhoneForm.formState.dirtyFields.password ||
            !signInPhoneForm.formState.dirtyFields.phone ||
            isPending
          }
          type='submit'
          className='w-full'
        >
          {t("sign-in.title")}
        </Button>
      </form>
    </Form>
  );
};
