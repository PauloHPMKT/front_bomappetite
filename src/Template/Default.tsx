import { ReactElement, ReactNode } from "react";
import { Header } from "../components/Header";
import { PageContainer } from "./styles";


export interface LayoutProps {
  children: ReactNode | ReactElement | JSX.Element;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <PageContainer>
        {children}
      </PageContainer>
    </>
  );
};
