import { useAuth } from "@/features/sign-in";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Form,
  Input,
  Typography
} from "@/shared/ui";

const SignIn = () => {
  const { signIn, signInForm } = useAuth();

  return (
    <Container centered>
      <Card>
        <CardHeader>
          <Typography kind='body-xl-semibold' as='h1'>
            Авторизация
          </Typography>
        </CardHeader>
        <CardContent>
          <Form onSubmit={signInForm.handleSubmit(signIn)}>
            <Typography kind='input-md' as='label' htmlFor='name'>
              Имя
              <Input
                type='text'
                placeholder='Ваше имя'
                id='name'
                {...signInForm.register("name")}
              />
              {signInForm.formState.errors.name && (
                <Typography kind='input-validate' as='span'>
                  {signInForm.formState.errors.name.message}
                </Typography>
              )}
            </Typography>

            <Typography kind='input-md' as='label' htmlFor='password'>
              Пароль
              <Input
                type='password'
                autoComplete='off'
                placeholder='Ваш пароль'
                id='password'
                {...signInForm.register("password")}
              />
              {signInForm.formState.errors.password && (
                <Typography kind='input-validate' as='span'>
                  {signInForm.formState.errors.password.message}
                </Typography>
              )}
            </Typography>

            <Button>Войти</Button>
          </Form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SignIn;
