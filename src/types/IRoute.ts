import React from "react";

export interface IRoute {
  name: string;
  src: string;
  isShown?: boolean;
  description?: string;
  component?: React.ReactNode;
  fallback?: React.ReactNode;
}
