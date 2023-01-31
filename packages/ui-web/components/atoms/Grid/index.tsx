import React from "react";
import { GridContainer } from './style'

export interface GridI {
    columns: number;
    children: React.ReactNode
}

export const Grid = ({ columns, children }: GridI) => {
    return <GridContainer columns={columns}>{children}</GridContainer>;
};
    
  