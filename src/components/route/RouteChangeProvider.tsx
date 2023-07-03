'use client'
import { FC } from 'react';
import {useUrlSyncOnScroll} from "@/components/route/hooks/useUrlSyncOnScroll";
import {IRoute} from "@/types/IRoute";

interface IRouteChangeProviderProps extends React.HTMLAttributes<HTMLElement> {
};

const RouteChangeProvider: FC<IRouteChangeProviderProps> = ({children}) => {
  useUrlSyncOnScroll();

  return (
    <>
      {children}
    </>
  )
}

export default RouteChangeProvider;
