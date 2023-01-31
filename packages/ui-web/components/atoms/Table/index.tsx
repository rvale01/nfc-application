import React, { useState } from 'react';
import type { ColumnsType } from 'antd/es/table';
import {default as TableEl} from 'antd/es/table';

export interface TableI {
    dataSource?: {
        key: string | number,
        [val: string]: any
    }[]
    columns: ColumnsType<any>
}

export const Table = ({columns,dataSource}: TableI) => {
    return (
        <TableEl
            columns={columns}
            dataSource={dataSource}
        />
    )
}