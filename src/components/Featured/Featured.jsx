import React from 'react';
import "./Featured.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Featured = () => {
    return (
        <div className='featured'>
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVertIcon className='icon'></MoreVertIcon>
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar 
                    value={70} 
                    text={"70%"}
                    strokeWidth={5}
                    styles={buildStyles({
                        textColor: "gray",
                        pathColor: "#7551f8cf",
                        trailColor: "rgba(218, 165, 32, 0.474)"
                      })}
                    ></CircularProgressbar>
                </div>
                <p className="title">Total sales made today</p>
                <p className="amount">$420</p>
                <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, numquam.</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon fontSize='small'></KeyboardArrowDownIcon>
                            <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpIcon fontSize='small'></KeyboardArrowUpIcon>
                            <div className="resultAmount">$12.4k</div>
                        </div> 
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpIcon fontSize='small'></KeyboardArrowUpIcon>
                            <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;