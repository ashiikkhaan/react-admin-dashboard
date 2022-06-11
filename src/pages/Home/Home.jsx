import React from 'react';
import "./Home.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Widgets from '../../components/Widgets/Widgets';

const Home = () => {
    return (
        <div className='home'>
            <Sidebar></Sidebar>
            <div className="homeContainer">
                <Navbar></Navbar>
                {/* now home page */}
                <div className="widgets">
                    <Widgets></Widgets>
                    <Widgets></Widgets>
                    <Widgets></Widgets>
                    <Widgets></Widgets>
                </div>
            </div>
        </div>
    );
};

export default Home;