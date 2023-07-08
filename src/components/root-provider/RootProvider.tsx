'use client'
import { FC } from 'react';
import RouteChangeProvider from "@/components/route/RouteChangeProvider";
import {SkeletonTheme} from "react-loading-skeleton";

interface IRootProviderProps extends React.HTMLAttributes<HTMLElement> {};

const RootProvider: FC<IRootProviderProps> = ({children}) => {
  return (
    <>
      <RouteChangeProvider>
        <SkeletonTheme baseColor="#2E3445" highlightColor="#525E65">
          {children}
        </SkeletonTheme>
      </RouteChangeProvider>
    </>
  )
}

export default RootProvider;
