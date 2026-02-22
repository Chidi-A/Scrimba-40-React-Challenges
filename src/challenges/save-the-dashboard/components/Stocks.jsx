import React from 'react';
import Draggable from 'react-draggable';

export default function Stocks(props) {
  const nodeRef = React.useRef(null);
  return (
    <div
      className="widget-wrapper Stocks"
      style={{ gridArea: `area-${props.gridArea}` }}
    >
      <Draggable
        onStop={props.dragHandler}
        defaultPosition={props.getOffset('Stocks')}
        cancel="button"
        nodeRef={nodeRef}
      >
        <div className="widget Stocks" ref={nodeRef}>
          <button
            className="remove-button"
            name="Stocks"
            onClick={props.changeHandler}
          ></button>
          <img src="/stock.png" />
        </div>
      </Draggable>
    </div>
  );
}
