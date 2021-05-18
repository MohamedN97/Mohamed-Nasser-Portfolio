import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Mohamed Nasser Elleithy</h1>
                <Typed
                    className="typed-text"
                    strings={["FRONT-END DEVELOPER","GRAPHIC DESIGNER"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="https://www.freelancer.com/u/nassereliethy" className="btn-contact">Order Now</a>
            </div>
        </div>
    )
}

export default Header
