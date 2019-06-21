import React, { Component } from 'react';

//need to create interface for Menu item props
const MenuItem = (props: any) => {
    const { item } = props;
    return (
        <li className="item">
            <a href={item.href} title={item.title}>{item.text}</a>
        </li>
    );
};

export default MenuItem;