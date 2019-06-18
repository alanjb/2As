import React, { Component } from 'react';

const Submenu = (props: { submenu: CKMSubmenu }) => {
    const { submenu } = props;
  
    if (!submenu.items || submenu.items.length === 0) {
      return null;
    } else {
      return (
        <React.Fragment>
          <UncontrolledDropdown nav inNavbar className="d-none d-lg-flex">
            <DropdownToggle nav caret title={submenu.title}>
              {submenu.text}
            </DropdownToggle>
  
            <DropdownMenu right>
              {submenu.items.map((item, index) => (
                <DropdownItem key={index} href={item.href} target="_blank">
                  {item.text}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </UncontrolledDropdown>
  
          <div className="submenu d-lg-none">
            <div className="submenu-header">
              <span className="submenu-header-text">{submenu.text}</span>
            </div>
  
            <div className="submenu-items">{submenu.items.map((item, index) => <MenuItem key={index} item={item} />)}</div>
          </div>
        </React.Fragment>
      );
    }
  };