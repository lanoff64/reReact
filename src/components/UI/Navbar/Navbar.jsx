import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div style={{width:'100vm', height:'100px', backgroundColor:'lightgrey'}} >

            <div style={{margin:'10px'}}>
                <Link to='/about'>О приложении</Link>
            </div>

            <div style={{margin:'10px'}}>
                <Link to='/posts'>Посты</Link>
            </div>

        </div>
    );
};

export default Navbar;