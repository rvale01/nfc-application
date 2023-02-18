import React from "react";
import { Box } from "../../atoms/Box";
import { Container } from "../../atoms/Container";
import { MenuItem, SideMenu} from './style'

export interface DashboardLayoutI {
    menuItems: {path: string, label: string}[]; 
    activeItem: number;
    onChange: (path: string)=> void; 
    children: React.ReactNode;
}

export const DashboardLayout = ({menuItems, activeItem, onChange, children}: DashboardLayoutI) => {

    return (
        <Container padding="large" height="90%">
            <Box direction="row" gap="medium" height="100%">
                <SideMenu>
                    {menuItems.map((value, i)=> {
                        return(
                            <MenuItem active={activeItem === i} onClick={()=>onChange(value.path)}>{value.label}</MenuItem>
                        )
                    })}
                </SideMenu>
                <div>{children}</div>
            </Box>
        </Container>
    )
}