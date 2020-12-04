/*
    Body of the pages 
*/
import React from 'react';

// rooting component
import { Link } from 'react-router-dom';

export const Body = (props) => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                    <li><Link to={props.to} className="nav-link"> {props.title} </Link></li>
                </ul>
            </nav>
            
        </div>
    );
}

export default Body;