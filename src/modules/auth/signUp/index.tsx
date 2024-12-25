import { useTranslation } from "react-i18next";
import { PatternFormat } from "react-number-format";
import { Link } from "react-router-dom";

import { PATHS } from "@shared/constants";
import { Button } from "@shared/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@shared/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@shared/ui/form";
import { Input } from "@shared/ui/input";
import { PasswordInput } from "@shared/ui/password-input";

import { useSignUp } from "./model/useSignUp";
import { useSignUpForm } from "./model/useSignUpForm";

const SignUpPage = () => {
  const { onSubmit, registerMutation } = useSignUp();
  const { isDisabled, signUpForm } = useSignUpForm();
  const { t } = useTranslation();

  return (
    <Card className='m-auto w-full max-w-fit'>
      <CardHeader>
        <CardTitle className='text-xl'>{t("sign-up.title")}</CardTitle>
        <CardDescription>{t("sign-up.description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...signUpForm}>
          <form onSubmit={signUpForm.handleSubmit(onSubmit)} className='grid gap-4'>
            <div className='flex items-center gap-5'>
              <FormField
                control={signUpForm.control}
                name='firstName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("general.name")}*</FormLabel>
                    <FormControl>
                      <Input placeholder={t("general.name")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={signUpForm.control}
                name='secondName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("general.second-name")}*</FormLabel>
                    <FormControl>
                      <Input placeholder={t("general.second-name")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={signUpForm.control}
              name='phone'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("general.phone")}*</FormLabel>
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
              control={signUpForm.control}
              name='mail'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("general.mail")}*</FormLabel>
                  <FormControl>
                    <Input placeholder={t("general.mail")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={signUpForm.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("general.password")}*</FormLabel>
                  <FormControl>
                    <PasswordInput
                      autoComplete='off'
                      placeholder={t("general.password")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              disabled={registerMutation.isPending || isDisabled}
              type='submit'
              className='w-full'
            >
              {t("sign-up.create-account")}
            </Button>
          </form>
        </Form>

        <p className='mt-4 text-center text-sm'>
          {t("sign-up.already_have_account")}{" "}
          <Link to={PATHS.SIGNIN} className='underline'>
            {t("sign-up.sign-in")}
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};

export default SignUpPage;
