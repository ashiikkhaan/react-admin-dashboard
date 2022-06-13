import React from 'react';
import "./List.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Datatable from "../../components/Datatable/Datatable";
const List = ({darkMode, setDarkMode}) => {
    return (
        <div className='list'>
            <Sidebar darkMode={darkMode} setDarkMode={setDarkMode}></Sidebar>
            <div className="listContainer">
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode}></Navbar>
                <Datatable></Datatable>
            </div>
        </div>
    );
};

export default List;