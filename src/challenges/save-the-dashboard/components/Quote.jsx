import React from 'react';
import Draggable from 'react-draggable';

export default function Quote(props) {
  const nodeRef = React.useRef(null);
  return (
    <div
      className="widget-wrapper Quote"
      style={{ gridArea: `area-${props.gridArea}` }}
    >
      <Draggable
        onStop={props.dragHandler}
        defaultPosition={props.getOffset('Quote')}
        cancel="button"
        nodeRef={nodeRef}
      >
        <div className="widget Quote" ref={nodeRef}>
          <button
            className="remove-button"
            name="Quote"
            onClick={props.changeHandler}
          ></button>
          <img src="./quote.png" />
        </div>
      </Draggable>
    </div>
  );
}
