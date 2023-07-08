'use client'
import { FC } from 'react';
import RouteChangeProvider from "@/components/route/RouteChangeProvider";
import {SkeletonTheme} from "react-loading-skeleton";

interface IRootProviderProps extends React.HTMLAttributes<HTMLElement> {};

const RootProvider: FC<IRootProviderProps> = ({children}) => {
  return (
    <>
      <RouteChangeProvider>
        <SkeletonTheme baseColor="#525E65" highlightColor="rgba(219,232,212,0.2)">
          {children}
        </SkeletonTheme>
      </RouteChangeProvider>
    </>
  )
}

export default RootProvider;
