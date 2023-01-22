import React from "react";
import { Tabs as TabsAntD } from 'antd';

interface TabsI {
    items: {
        label: string,
        key: any,
        children: React.ReactNode
    }[]
}
export const Tabs = ({items}: TabsI) => {
    
    return(
        <TabsAntD
            type="card"
            items={items}
        />
    )
}