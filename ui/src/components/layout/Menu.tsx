import React from 'react';
import MenuItem from './MenuItem';
//should be as MenuItem interface
const Menu = (props: any) => {
  const { items } = props;
  return (
    <React.Fragment>
      {items.map((item: any, index: any) => {
        return <MenuItem key={index} item={item} />;
      })}
    </React.Fragment>
  );
};
export default Menu;