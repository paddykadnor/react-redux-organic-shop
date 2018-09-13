import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Header.css";



class Header extends React.Component{


    render()
    {
        return(
            <div className="header container-fluid">
                <div className="nav navbar">
                <Link  to="/"><FontAwesomeIcon icon="leaf" className="logo"></FontAwesomeIcon></Link>
                <Link to="./Cart"><FontAwesomeIcon icon="shopping-cart" className="cart"></FontAwesomeIcon></Link>
                </div>
            </div>
        )
    }
}

export default Header