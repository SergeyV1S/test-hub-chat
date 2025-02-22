import { Card, CardContent, CardHeader, Container } from "@/shared/ui";

const SignIn = () => (
  <Container>
    <Card>
      <CardHeader>Авторизация</CardHeader>
      <CardContent>
        <form>
          <label htmlFor='mail'>
            E-Mail
            <input type='text' id='mail' />
          </label>
          <label htmlFor='password'>
            Пароль
            <input type='text' id='password' />
          </label>
          <button>Войти</button>
        </form>
      </CardContent>
    </Card>
  </Container>
);

export default SignIn;
