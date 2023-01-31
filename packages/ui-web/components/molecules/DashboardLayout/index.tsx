import React from "react";
import { Box } from "../../atoms/Box";
import * as style from './style'

export interface DashboardLayoutI {
    menuItems: {path: string, label: string}[]; 
    activeItem: number;
    onChange: (path: string)=> void; 
    children: React.ReactNode;
}

export const DashboardLayout = ({menuItems, activeItem, onChange, children}: DashboardLayoutI) => {

    return (
        <Box direction="row">
            <div style={style.sideMenu()}>
                {menuItems.map((value, i)=> {
                    return(
                        <div style={style.menuItem(activeItem === i)} onClick={()=>onChange(value.path)}>{value.label}</div>
                    )
                })}
            </div>
            <div>{children}</div>
        </Box>
    )
}