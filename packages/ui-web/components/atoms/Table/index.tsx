import React, { forwardRef, useImperativeHandle, useState } from 'react';
import type { ColumnsType } from 'antd/es/table';
import { Table as TableEl } from 'antd';
export interface TableI {
    data?: {
        key: string | number,
        [val: string]: any
    }[]
    columns: ColumnsType<any>
}

export const Table = forwardRef(({columns, data}: TableI, ref) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectChange = (selectedRowKeys: []) => {
        setSelectedRowKeys(selectedRowKeys);
    };

    useImperativeHandle(ref, () => ({
        getSelectedRowKeys: () => selectedRowKeys,
      }));
    
    
    return (
        <Table 
            rowSelection={{
                selectedRowKeys,
                onChange: onSelectChange,
            }} 
            columns={columns} 
            dataSource={data} 
        />
    )
})