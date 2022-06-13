import React, { useState } from 'react';
import "./New.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

const New = ({inputs, title, darkMode, setDarkMode}) => {

    const [file, setFile] = useState("");
    console.log(file)
    
    return (
        <div className='new'>
            <Sidebar darkMode={darkMode} setDarkMode={setDarkMode}></Sidebar>
            <div className='newContainer'>
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode}></Navbar>
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" className='img'/>
                    </div>
                    <div className="right">
                        <form action="">
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image
                                    <DriveFolderUploadIcon className='icon'></DriveFolderUploadIcon>
                                    </label>
                                    <input type="file" id='file' onChange={e=>setFile(e.target.files[0])} style={{display: "none"}}/>
                            </div>
                            {
                                inputs.map (input => (
                                    <div className="formInput" key={input.id}>
                                      <label htmlFor="">{input.label}</label>
                                      <input type={input.type} placeholder={input.placeholder} />
                                    </div>
                                ))
                            }
                            
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;