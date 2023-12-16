import { Content, HeaderContainer } from "./styles"
import logo from '../../assets/images/food-square-logo.png';

export const Header = () => {
  return(
    <HeaderContainer>
      <Content>
        <div className="header-details">
          <h1>Gerenciador de pedidos</h1>
          <p>Acompanhe os pedidos de seus clientes</p>
        </div>
        <div className="logo-container">
          <img src={logo} alt="Logo Food Square" />
        </div>
      </Content>
    </HeaderContainer>
  )
}
