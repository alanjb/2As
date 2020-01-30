import React from 'react';
import { NavLink } from 'react-router-dom';

//need to create interface for Menu item props
const MenuItem = (props: any) => {
    const { item } = props;
    return (
        <li className="menu-item">
            <NavLink to={item.to}>
                {item.text}
            </NavLink>
        </li>    
    );
};

export default MenuItem;