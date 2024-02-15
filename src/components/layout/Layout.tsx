"use client";
import { FC, useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LogoSmallSvg from "@/components/svgs/LogoSmall";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useTimeout } from "@/hooks/useTimeout";

interface ILayoutProps extends React.HTMLAttributes<HTMLElement> {}

const Layout: FC<ILayoutProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setIsLoading(false);
  // }, []);

  useTimeout(() => {
    setIsLoading(false);
  }, 750);

  if (isLoading) {
    return (
      <main
        className={
          "relative z-10 flex items-center justify-center w-full min-h-[calc(100vh-40px)]"
        }
      >
        <motion.div
          className={"inline-flex items-center justify-center w-[300px]"}
          layout
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <LogoSmallSvg className={"inline mt-1"} />
          <TypeAnimation
            sequence={["anilEph.", 2000]}
            preRenderFirstString={false}
            cursor={false}
            className={
              "font-roboto-mono text-[32px] font-bold text-my-secondary-100 leading-[40px] block"
            }
            // repeat={Infinity}
            speed={60}
          />
        </motion.div>
      </main>
    );
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
