import styled from "styled-components";

export const Board = styled.div`
  padding: 16px;
  border: 1px solid rgba(204, 204, 204, 0.4);
  width: 100%;
  border-radius: 16px;
  display: flex;
  flex: 1;
  text-align: center;
  justify-content: center;
  flex-direction: column;

  > header {
    padding: 8px 0;
    font-size: 0.9rem;
    display: flex;
    justify-content: center;
    gap: 8px;
  }
`;
