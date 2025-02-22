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

const SignIn = () => (
  <Container>
    <Card>
      <CardHeader>
        <Typography kind='body-xl-semibold' as='h1'>
          Авторизация
        </Typography>
      </CardHeader>
      <CardContent>
        <Form>
          <Typography kind='input-md' as='label' htmlFor='name'>
            Имя
            <Input type='text' placeholder='Ваше имя' id='name' />
          </Typography>
          <Typography kind='input-md' as='label' htmlFor='password'>
            Пароль
            <Input type='text' placeholder='Ваш пароль' id='password' />
          </Typography>
          <Button>Войти</Button>
        </Form>
      </CardContent>
    </Card>
  </Container>
);

export default SignIn;
