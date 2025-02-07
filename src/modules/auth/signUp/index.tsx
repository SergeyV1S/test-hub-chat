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

  return (
    <Card className='m-auto w-full max-w-fit'>
      <CardHeader>
        <CardTitle className='text-xl'>Регистрация</CardTitle>
        <CardDescription>Введите свои данные для создания учетной записи</CardDescription>
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
                    <FormLabel>Имя*</FormLabel>
                    <FormControl>
                      <Input data-testid='sign_up_first_name_input' placeholder='Имя' {...field} />
                    </FormControl>
                    <FormMessage data-testid='sign_up_first_name_form_message' />
                  </FormItem>
                )}
              />
              <FormField
                control={signUpForm.control}
                name='secondName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Фамилия*</FormLabel>
                    <FormControl>
                      <Input
                        data-testid='sign_up_second_name_input'
                        placeholder='Фамилия'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage data-testid='sign_up_second_name_form_message' />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={signUpForm.control}
              name='phone'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Номер телефона*</FormLabel>
                  <FormControl>
                    <Input
                      type='text'
                      placeholder='Номер телефона'
                      format='+7 (###) ### ## ##'
                      data-testid='sign_up_phone_input'
                      mask='_'
                      component={PatternFormat}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage data-testid='sign_up_phone_form_message' />
                </FormItem>
              )}
            />
            <FormField
              control={signUpForm.control}
              name='mail'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Электронная почта*</FormLabel>
                  <FormControl>
                    <Input
                      data-testid='sign_up_mail_input'
                      placeholder='Электронная почта'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage data-testid='sign_up_mail_form_message' />
                </FormItem>
              )}
            />
            <FormField
              control={signUpForm.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Пароль*</FormLabel>
                  <FormControl>
                    <PasswordInput
                      autoComplete='off'
                      data-testid='sign_up_password_input'
                      placeholder='Пароль'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage data-testid='sign_up_password_form_message' />
                </FormItem>
              )}
            />
            <Button
              disabled={registerMutation.isPending || isDisabled}
              type='submit'
              className='w-full'
              data-testid='sign_up_sign_in_button'
            >
              Зарегистрироваться
            </Button>
          </form>
        </Form>

        <p className='mt-4 text-center text-sm'>
          Уже есть учетная запись?{" "}
          <Link to={PATHS.SIGNIN} className='underline'>
            Войти
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};

export default SignUpPage;
