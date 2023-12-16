import { ReactElement, ReactNode } from "react";
import { Header } from "../components/Header";


export interface LayoutProps {
  children: ReactNode | ReactElement | JSX.Element;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
