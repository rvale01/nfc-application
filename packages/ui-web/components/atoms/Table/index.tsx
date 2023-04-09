import React, { forwardRef, useImperativeHandle, useState } from 'react';
import type { ColumnsType } from 'antd/es/table';
import { Table as TableEl } from 'antd';
export interface TableI {
    dataSource?: {
        key?: string | number,
        [val: string]: any
    }[]
    columns: ColumnsType<any>;
    showCheckboxes?: boolean;
}

export const Table = forwardRef(({columns, dataSource, showCheckboxes = false}: TableI, ref) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectChange = (selectedRowKeys: []) => {
        setSelectedRowKeys(selectedRowKeys);
    };

    useImperativeHandle(ref, () => ({
        getSelectedRowKeys: () => selectedRowKeys,
      }));
    
    
    return (
        <TableEl 
            rowSelection={showCheckboxes ? {
                selectedRowKeys,
                onChange:  (newSelectedRowKeys, selectedRows) => {
                    console.log(newSelectedRowKeys)
                    setSelectedRowKeys(newSelectedRowKeys);
                  },
            } : undefined} 
            columns={columns} 
            dataSource={dataSource} 
        />
    )
})