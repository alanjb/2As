import React from 'react';
const { items } = require('../../config/ConfigFunctions');

//need to create interface for Menu item props
const MenuItem = (props: any) => {
    const { item } = props;
    return (
        <li className="menu-item">
            <a className="textitem" href={item.href} title={item.title}>{item.text}</a>
        </li>
    );
};

export default MenuItem;