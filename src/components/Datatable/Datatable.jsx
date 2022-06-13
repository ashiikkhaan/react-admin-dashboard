import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import {userColumns, userRows} from "../../datatablesource";

const Datatable = () => {
    const [data, setData] = useState(userRows);
    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }
    const actionColumn = [
        {field: "action", 
        headerName:"Action", 
        width: 200, 
        renderCell: (params)=> {
            return (
                <div className="cellAction">
                    <Link to="/users/testID1234" style={{textDecoration: "none"}}>
                    <div className="viewButton">View</div>
                    </Link>
                    <div className="deleteButton" onClick={()=> handleDelete(params.row.id)}>Delete</div>
                </div>
            )
        }}
    ];
    return (
        <div className='dataTable'>
            <div className="datatableTitle">
                Add New User
                <Link to="/users/new" className="link">
                    Add New
                </Link>
                </div>
            <div style={{ height: "90vh", width: '100%' }}>
                <DataGrid
                className='dataGrid'
                    rows={data}
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