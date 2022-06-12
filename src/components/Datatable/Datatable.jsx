import React from 'react';
import "./Datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import {userColumns, userRows} from "../../datatablesource";

const Datatable = () => {
    const actionColumn = [
        {field: "action", headerName:"Action", width: 200, renderCell: ()=> {
            return (
                <div className="cellAction">
                    <div className="viewButton">View</div>
                    <div className="deleteButton">Delete</div>
                </div>
            )
        }}
    ];
    return (
        <div className='dataTable'>
            <div style={{ height: "90vh", width: '100%' }}>
                <DataGrid
                    rows={userRows}
                    columns={userColumns.concat(actionColumn)}
                    pageSize={8}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </div>
    );
};

export default Datatable;