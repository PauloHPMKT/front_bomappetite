import { ReactNode } from "react";
import { ButtonAction } from "./styles";

interface ButtonProps {
  children: ReactNode;
  handleClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}

export const MainButton = ({ children, handleClick, type }: ButtonProps) => {
  return(
    <ButtonAction onClick={handleClick} type={type}>
      { children }
    </ButtonAction>
  )
}
