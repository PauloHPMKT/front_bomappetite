import { FormEvent, useCallback } from "react";
import { MainButton } from "../../Button";
import { Form } from "./styles";

export const FormLogin = () => {
  const login = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    console.log('login')
  }, []);

  return(
    <Form onSubmit={login}>
      <input
        type="email"
        placeholder="E-mail"
      />
      <input
        type="password"
        placeholder="Senha"
      />
      <MainButton type="submit">
        Entrar
      </MainButton>
    </Form>
  )
}
