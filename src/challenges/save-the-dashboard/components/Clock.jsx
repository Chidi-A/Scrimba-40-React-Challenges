import React from 'react';
import Draggable from 'react-draggable';

export default function Clock(props) {
  const nodeRef = React.useRef(null);
  const [date, setDate] = React.useState(getDate());
  const dayName = date.toLocaleString([], { weekday: 'long' });
  const dayNumber = date.getDate();
  const month = date.toLocaleString([], { month: 'long' });
  const year = date.getFullYear();
  const time = date.toLocaleString([], {
    hour: 'numeric',
    minute: '2-digit',
  });

  function getDate() {
    return new Date();
  }
  React.useEffect(() => {
    let ticker = setInterval(() => {
      setDate(getDate());
    }, 500);
    return () => clearInterval(ticker);
  }, []);

  return (
    <div
      className="widget-wrapper Clock"
      style={{ gridArea: `area-${props.gridArea}` }}
    >
      <Draggable
        onStop={props.dragHandler}
        defaultPosition={props.getOffset('Clock')}
        cancel="button"
        nodeRef={nodeRef}
      >
        <div className="widget Clock" ref={nodeRef}>
          <button
            className="remove-button"
            name="Clock"
            onClick={props.changeHandler}
          ></button>
          <div>{dayName}</div>
          <div className="month">
            {month} {dayNumber}, {year}
          </div>
          <div className="time">
            <div>{time}</div>
          </div>
        </div>
      </Draggable>
    </div>
  );
}
