import { FC } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface ILayoutProps extends React.HTMLAttributes<HTMLElement> {};

const Layout: FC<ILayoutProps> = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout;
