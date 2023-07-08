'use client'
import React, { FC } from 'react';
import {default as SkeletonOrigin} from 'react-loading-skeleton'

interface ISkeletonProps extends React.HTMLAttributes<HTMLElement> {
  count?: number;
  circle?: boolean;
  containerClassName?: string;
};

const Skeleton: FC<ISkeletonProps> = (props) => {
  return (
    <SkeletonOrigin baseColor="#2E3445" highlightColor="#525E65" {...props} />
  )
}

export default Skeleton;
