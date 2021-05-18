import React from 'react'
import mypic from "../mypic.png";

const Home = () => {
    return (
        <div className="homePage">
            <div className="left">
                <div className="imgContainer">
                    <img className="myPic" src={mypic} alt="Mohamed's Photo"/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, i'm</h2>
                    <h1>Mohamed Nasser</h1>
                    <p>An exceptionally talented UI Developer/Graphic Designer who is looking
                         forward to work for a growing company that will provide me with the 
                         possibility of growing within it and it will allow the development of my 
                         abilities and skills in favor of the company’s mission.
                    </p>
                    <a href="https://drive.google.com/file/d/1floS5h4g9zwmNPF9uagt2ijkYKFjTLmQ/view?usp=sharing" className="btn-resume">Download Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Home
