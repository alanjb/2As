import React from "react";

const ButtonGroup = ({ tradeObject }) => (
  <div>
    {tradeObjects.map((tradeObjects, i) => (
      <button
        data-tech={tradeObject}
        key={`btn-${i}`}
        className="tradeButtons"
      >
        {tradeObjects}
      </button>
    ))}
  </div>
);

export default ButtonGroup;
