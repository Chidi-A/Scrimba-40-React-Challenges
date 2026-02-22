import React from 'react';
import Draggable from 'react-draggable';

export default function News(props) {
  const nodeRef = React.useRef(null);
  return (
    <div
      className="widget-wrapper News"
      style={{ gridArea: `area-${props.gridArea}` }}
    >
      <Draggable
        onStop={props.dragHandler}
        defaultPosition={props.getOffset('News')}
        cancel="button"
        nodeRef={nodeRef}
      >
        <div className="widget News" ref={nodeRef}>
          <button
            className="remove-button"
            name="News"
            onClick={props.changeHandler}
          ></button>
          <img src="/news.png" />
        </div>
      </Draggable>
    </div>
  );
}
