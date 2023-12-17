import styled from "styled-components";

export const Container = styled.div`
  background-color: red;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardLogin = styled.div`
  color: #fff;
  text-align: center;
  width: 350px;

  .fs-banner {
    margin-bottom: 50px;
    width: 100%;

    h2 {
      text-align: start;
    }

    img {
      width: 250px;
    }
  }

  .logo {
    opacity: 1;
    transition: opacity .7s ease, transform .7s ease;
    transform: translateY(20%);
  }

  .slide-up {
    transform: translateY(-5%);
  }

  .login-form {
    opacity: 0;
    transition: opacity 2s ease-in-out, transform 2s ease-in-out;
  }

  .show-form {
    opacity: 1;
    transform: translateY(0);
  }
`;
