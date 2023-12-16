import styled from "styled-components";

export const ButtonAction = styled.button`
  background-color: #333;
  color: #fff;
  border-radius: 48px;
  border: none;
  padding: 8px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 8px;

  &:hover {
    background-color: #121212;
    transition: 0.7s ease-in-out;
  }
`;
