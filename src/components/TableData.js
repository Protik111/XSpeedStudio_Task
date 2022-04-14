import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from "@mui/system";
import LinearProgress from '@mui/material/LinearProgress';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

const TableData = () => {
    const [tableHeader, setTableHeader] = useState([])
    const [dataTable, setDataTable] = useState([]);

    useEffect(() => {
        axios.get('http://localhost/api/list.php')
            .then(result => {
                setTableHeader(result.data.data.headers[0])
                setDataTable(result.data.data.rows)
            })
    }, [])

    // useEffect(() => {
    //     axios.get('http://localhost/api/reorder.php')
    //         .then(result => {
    //             console.log(result, 'reorder')
    //         })
    // }, [])

    if (tableHeader.length <= 0) {
        return (
            <Box mt={20} sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        )
    }

    const columns = [
        { dataField: 'id', text: !tableHeader.id.title ? '' : tableHeader.id.title, sort: tableHeader.id.sortable, filter: tableHeader.id.searchable === true ? textFilter() : false },
        { dataField: 'name', text: !tableHeader.name.title ? '' : tableHeader.name.title, sort: tableHeader.name.sortable, filter: tableHeader.name.searchable === true ? textFilter() : false },
        { dataField: 'message', text: tableHeader.message.title, sort: tableHeader.message.sortable, filter: tableHeader.message.searchable === true ? textFilter() : false },
        { dataField: 'created_at', text: !tableHeader.created_at.title ? '' : tableHeader.created_at.title, sort: tableHeader.created_at.sortable, filter: tableHeader.created_at.searchable === true ? textFilter() : false }
    ]

    // console.log('data', dataTable, tableHeader);

    return (
        <div className="mt-5">
            <BootstrapTable
                bootstrap4
                keyField='id'
                columns={columns}
                data={dataTable}
                filter={filterFactory()}
            ></BootstrapTable>
        </div>
    );
};

export default TableData;