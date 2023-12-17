import { Container, CardLogin } from "./styles"
import logo from '../../assets/images/food-square-logo.png';
import { FormLogin } from "../../components/Forms/FormLogin";
import { useEffect, useState } from "react";

export const Login = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const TIME_TO_SHOW_FORM = 2000;
    const timer = setTimeout(() => setShowForm(true), TIME_TO_SHOW_FORM);
    return () => clearTimeout(timer);
  }, []);

  return(
    <Container>
      <CardLogin>
        <div className={`fs-banner logo ${showForm ? 'slide-up' : ''}`}>
          <h2>Seja bem vindo ao</h2>
          <img src={logo} alt="Logo Food Square" />
        </div>
        <div className={`login-form ${showForm ? 'show-form' : ''}`}>
          {showForm && <FormLogin />}
        </div>
      </CardLogin>
    </Container>

  )
}
