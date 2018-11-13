import React from 'react';

const NameTitle = (props) => {
  return (
    <h1 className="name-title">
      welcome,
      {" " + props.firstName}
    </h1>
  )
}

export default NameTitle;
