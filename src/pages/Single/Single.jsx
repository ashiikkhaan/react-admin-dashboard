import React from 'react';
import "./Single.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Chart from "../../components/Chart/Chart";
import List from '../../components/List/List';


const Single = ({darkMode, setDarkMode}) => {
    return (
        <div className='single'>
            <Sidebar darkMode={darkMode} setDarkMode={setDarkMode}></Sidebar>
            <div className="singleContainer">
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode}></Navbar>
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src="https://i.pinimg.com/736x/a6/74/e4/a674e4d71eb087b6f8b10a710cf9ac42--lawyer.jpg" alt="" className='itemImg'/>
                            <div className="details">
                                <h1 className="itemTitle">Marcia Perry</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">merciaperry@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Mobile:</span>
                                    <span className="itemValue">+1 2345 67 89</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">Elton St. 234 Garden Yd. NewYork</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">USA</span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3/1} title = "Users's Spending (Last 6 months)"></Chart>
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transactions</h1>
                    <List></List>
                </div>
            </div>
        </div>
    );
};

export default Single;