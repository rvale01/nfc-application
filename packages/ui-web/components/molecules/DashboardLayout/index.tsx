import React from "react";
import { Box } from "../../atoms/Box";
import { MenuItem, SideMenu} from './style'

export interface DashboardLayoutI {
    menuItems: {path: string, label: string}[]; 
    activeItem: number;
    onChange: (path: string)=> void; 
    children: React.ReactNode;
}

export const DashboardLayout = ({menuItems, activeItem, onChange, children}: DashboardLayoutI) => {

    return (
        <Box direction="row">
            <SideMenu>
                {menuItems.map((value, i)=> {
                    return(
                        <MenuItem active={activeItem === i} onClick={()=>onChange(value.path)}>{value.label}</MenuItem>
                    )
                })}
            </SideMenu>
            <div>{children}</div>
        </Box>
    )
}