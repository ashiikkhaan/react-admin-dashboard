import React from 'react';
import "./Home.scss";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
    return (
        <div className='home'>
            <Sidebar></Sidebar>
            <div className="homeContainer">container</div>
        </div>
    );
};

export default Home;