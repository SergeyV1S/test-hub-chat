import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import type { z } from "zod";

import { Button, Input, PasswordInput } from "@shared/ui";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@shared/ui/form";

import { signInPhoneSchema } from "../lib";

interface IPhoneFormProps {
  onSubmit: (values: z.infer<typeof signInPhoneSchema>) => Promise<void>;
  switchForm: () => void;
  isPending: boolean;
}

export const PhoneForm = ({ onSubmit, switchForm, isPending }: IPhoneFormProps) => {
  const signInPhoneForm = useForm<z.infer<typeof signInPhoneSchema>>({
    resolver: zodResolver(signInPhoneSchema),
    defaultValues: {
      phone: "",
      password: ""
    }
  });

  return (
    <Form {...signInPhoneForm}>
      <form
        onSubmit={signInPhoneForm.handleSubmit(onSubmit)}
        className='grid gap-4'
        data-testid='sign_in_phone_form'
      >
        <FormField
          control={signInPhoneForm.control}
          name='phone'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Номер телефона</FormLabel>
              <FormControl>
                <Input
                  data-testid='sign_in_phone_input'
                  type='text'
                  placeholder='Номер телефона'
                  format='+7 (###) ### ## ##'
                  mask='_'
                  component={PatternFormat}
                  {...field}
                />
              </FormControl>
              <FormMessage data-testid='sign_in_phone_form_message' />
            </FormItem>
          )}
        />
        <FormField
          control={signInPhoneForm.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Пароль</FormLabel>
              <FormControl>
                <PasswordInput
                  data-testid='sign_in_password_input'
                  autoComplete='off'
                  placeholder='Пароль'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button onClick={switchForm} size='sm' variant='link' type='button'>
          Войти по электронной почте
        </Button>
        <Button
          disabled={
            !signInPhoneForm.formState.dirtyFields.password ||
            !signInPhoneForm.formState.dirtyFields.phone ||
            isPending
          }
          data-testid='sign_in_submit_form_button'
          type='submit'
          className='w-full'
        >
          Войти
        </Button>
      </form>
    </Form>
  );
};
