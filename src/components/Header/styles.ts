import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: red;
  color: #fff;
  padding: 8px 35px;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logout-icon {
    font-weight: 600;
    cursor: pointer;

    &:hover {
      color: #8f0303;
    }
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.5%;

  .header-details {
    h1 {
      font-size: 2rem;
    }

    h2 {
      margin-top: 6px;
      font-weight: 400;
      opacity: 0.8;
    }
  }

  .logo-container {
    width: 200px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
    }
  }
`;
