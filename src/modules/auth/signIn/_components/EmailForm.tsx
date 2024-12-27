import { zodResolver } from "@hookform/resolvers/zod";
import type { TFunctionNonStrict } from "i18next";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { Button } from "@shared/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@shared/ui/form";
import { Input } from "@shared/ui/input";
import { PasswordInput } from "@shared/ui/password-input";

import { signInMailSchema } from "../lib/signInMailSchema";

interface MailFormProps {
  onSubmit: (values: z.infer<typeof signInMailSchema>) => Promise<void>;
  switchForm: () => void;
  isPending: boolean;
  t: TFunctionNonStrict<"translation", undefined>;
}

export const EmailForm = ({ onSubmit, switchForm, isPending, t }: MailFormProps) => {
  const signInMailForm = useForm<z.infer<typeof signInMailSchema>>({
    resolver: zodResolver(signInMailSchema),
    defaultValues: {
      mail: "",
      password: ""
    }
  });

  return (
    <Form {...signInMailForm}>
      <form
        onSubmit={signInMailForm.handleSubmit(onSubmit)}
        className='grid gap-4'
        data-testid='sign_in_mail_form'
      >
        <FormField
          control={signInMailForm.control}
          name='mail'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("general.mail")}</FormLabel>
              <FormControl>
                <Input
                  data-testid='sign_in_mail_input'
                  placeholder={t("general.mail")}
                  {...field}
                />
              </FormControl>
              <FormMessage data-testid='sign_in_mail_form_message' />
            </FormItem>
          )}
        />
        <FormField
          control={signInMailForm.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("general.password")}</FormLabel>
              <FormControl>
                <PasswordInput
                  data-testid='sign_in_password_input'
                  autoComplete='off'
                  placeholder={t("general.password")}
                  {...field}
                />
              </FormControl>
              <FormMessage data-testid='sign_in_password_form_message' />
            </FormItem>
          )}
        />
        <Button onClick={switchForm} size='sm' variant='link' type='button'>
          {t("sign-in.sign_in_with_phone")}
        </Button>
        <Button
          disabled={
            !signInMailForm.formState.dirtyFields.password ||
            !signInMailForm.formState.dirtyFields.mail ||
            isPending
          }
          data-testid='sign_in_submit_form_button'
          type='submit'
          className='w-full'
        >
          {t("sign-in.title")}
        </Button>
      </form>
    </Form>
  );
};
