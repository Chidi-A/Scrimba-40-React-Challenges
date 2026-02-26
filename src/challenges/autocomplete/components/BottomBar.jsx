import React from 'react';

export default function BottomBar() {
  return (
    <footer className="bottom-bar-container">
      <img className="icon" src="/reminder.svg" />
      <img className="icon" src="/add-collaborator.svg" />
      <img className="icon" src="/palette.svg" />
      <img className="icon" src="/add-image.svg" />
      <img className="icon" src="/more.svg" />
      <div>
        <img className="icon" src="/undo.svg" />
        <img className="icon" src="/redo.svg" />
      </div>
    </footer>
  );
}
