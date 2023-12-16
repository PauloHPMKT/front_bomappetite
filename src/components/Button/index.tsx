import { ButtonAction } from "./styles";

interface ButtonProps {
  children: string;
  handleClick: () => void;
}

export const MainButton = ({ children, handleClick }: ButtonProps) => {
  return(
    <ButtonAction onClick={handleClick}>
      { children }
    </ButtonAction>
  )
}
