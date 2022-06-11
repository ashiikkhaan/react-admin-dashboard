import React from 'react';
import "./Widgets.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widgets = (props) => {
    const {type} = props;
    let data;

    const ammount = 100;
    const diff = 20;

    switch(type)  {
        case "user": 
         data = {
            title: "USERS",
            isMoney: false, 
            link: "See all users", 
            icon: <PersonOutlinedIcon 
            className='icon' 
            style={{
                color:"crimson",
                backgroundColor: "rgb(255, 0, 0, 0.2)"
            }}
            ></PersonOutlinedIcon>
         };
         break;
        case "order": 
         data = {
            title: "ORDERS",
            isMoney: false, 
            link: "View all orders", 
            icon: <ShoppingCartOutlinedIcon 
            className='icon'
            style={{
                color: "goldenrod",
                backgroundColor: "rgba(218, 165, 32, 0.2)"
            }}
            ></ShoppingCartOutlinedIcon>
         };
         break;
        case "earning": 
         data = {
            title: "EARNINGS",
            isMoney: true, 
            link: "View net earnings", 
            icon: <MonetizationOnOutlinedIcon 
            className='icon'
            style={{
                color: "green",
                backgroundColor: "rgba(0, 128, 0, 0.2)"
            }}
            ></MonetizationOnOutlinedIcon>
         };
         break;
        case "balance": 
         data = {
            title: "BALANCE",
            isMoney: true, 
            link: "See details", 
            icon: <AccountBalanceWalletIcon 
             className='icon'
             style={{
                color: "purple", 
                backgroundColor: "rgba(128, 0, 128, 0.2)"
             }}
             ></AccountBalanceWalletIcon>
         };
         break;
         default:
            break;
    };
    return (
        <div className='widget'>
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"} {ammount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon></KeyboardArrowUpIcon>
                    {diff}%
                    </div>
                {data.icon}
            </div>
        </div>
    );
};

export default Widgets;