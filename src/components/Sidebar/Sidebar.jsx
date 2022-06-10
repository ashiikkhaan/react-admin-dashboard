import React from 'react';
import "./Sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="top">
                <span className='logo'>XavionAshik</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <li>
                        <DashboardIcon></DashboardIcon>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <span>Dashboard</span>
                    </li>
                </ul>
            </div>

            <div className="bottom">color options</div>
        </div>
    );
};

export default Sidebar;