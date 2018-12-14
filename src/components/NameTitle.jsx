import React from 'react';

const NameTitle = (props) => {
  return (<h1 className="name-title">
    welcome, {/* {" " + props.firstName} */}
    {" " + props.tech}
  </h1>)
}

export default NameTitle;
