import React from 'react';
import "./app.css";

const Header = (props) => {
    return (
        <div className="header">
            {props.text}
        </div>
    );
};

export default Header;