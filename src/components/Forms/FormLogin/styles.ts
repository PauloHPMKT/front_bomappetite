import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;

  input {
    width: 100%;
    height: 35px;
    border-radius: 8px;
    border: transparent;
    padding: 0 8px;
    outline: none;
    font-size: 1rem;
  }
`;
