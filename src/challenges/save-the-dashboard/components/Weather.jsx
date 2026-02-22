import React from 'react';
import Draggable from 'react-draggable';

export default function Weather(props) {
  const nodeRef = React.useRef(null);
  return (
    <div
      className="widget-wrapper Weather"
      style={{ gridArea: `area-${props.gridArea}` }}
    >
      <Draggable
        onStop={props.dragHandler}
        defaultPosition={props.getOffset('Weather')}
        cancel="button"
        nodeRef={nodeRef}
      >
        <div className="widget Weather" ref={nodeRef}>
          <button
            className="remove-button"
            name="Weather"
            onClick={props.changeHandler}
          ></button>
          <img src="./weather.png" />
        </div>
      </Draggable>
    </div>
  );
}
