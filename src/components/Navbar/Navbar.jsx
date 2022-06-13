import React from 'react';
import "./Navbar.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

const Navbar = ({darkMode,setDarkMode}) => {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='search or jump to...'/>
                    <SearchOutlinedIcon className='icon'></SearchOutlinedIcon>
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className='icon'></LanguageOutlinedIcon>
                        English
                    </div>
                    <div className='item' style={{cursor: "pointer"}} onClick={()=> setDarkMode(darkMode === "app" ? "dark" : "app")}>
                        <DarkModeOutlinedIcon className='icon'></DarkModeOutlinedIcon>
                    </div>
                    <div className='item'>
                        <FullscreenExitOutlinedIcon className='icon'></FullscreenExitOutlinedIcon>
                    </div>
                    <div className='item'>
                        <NotificationsNoneOutlinedIcon className='icon'></NotificationsNoneOutlinedIcon>
                        <div className="counter">1</div>
                    </div>
                    <div className='item'>
                        <ChatBubbleOutlineOutlinedIcon className='icon'></ChatBubbleOutlineOutlinedIcon>
                        <div className="counter">2</div>
                    </div>
                    <div className='item'>
                        <ListOutlinedIcon className='icon'></ListOutlinedIcon>
                    </div>
                    <div className='item'>
                        <img src="https://cdn.pixabay.com/photo/2013/07/13/10/04/detective-156465__340.png" alt="" className='avatar'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;