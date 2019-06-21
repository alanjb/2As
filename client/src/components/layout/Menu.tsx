import React, { Component } from 'react';

// const Menu = (props: { items: Array<MenuItem | Submenu> }) => {
//     const { items } = props;
  
//     return (
//       <React.Fragment>
//         {items.map((item, index) => {
//           const submenu = item as Submenu;
  
//           if (submenu.items != null) {
//             return <Submenu key={index} submenu={submenu} />;
//           } else {
//             return <MenuItem key={index} item={item} />;
//           }
//         })}
//       </React.Fragment>
//     );
//   };