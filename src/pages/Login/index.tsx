import { Container, CardLogin } from "./styles"
import logo from '../../assets/images/food-square-logo.png';

export const Login = () => {
  return(
    <Container>
      <CardLogin>
        <div className="fs-banner">
          <h2>Seja bem vindo ao</h2>
          <img src={logo} />
          Login
        </div>
      </CardLogin>
    </Container>

  )
}
