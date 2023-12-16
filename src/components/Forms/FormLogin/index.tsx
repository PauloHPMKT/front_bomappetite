import { ButtonAction } from "../../Button/styles"

export const FormLogin = () => {
  return(
    <form>
      <input
        type="email"
        placeholder="E-mail"
      />
      <input
        type="password"
        placeholder="E-mail"
      />
      <ButtonAction type="submit">
        Entrar
      </ButtonAction>
    </form>
  )
}
