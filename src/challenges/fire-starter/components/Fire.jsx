import React from 'react';

export default function Fire({ woodOnFire }) {
  if (woodOnFire) {
    return (
      <div className="fire-container">
        <span className="fire vibrate">🔥</span>
      </div>
    );
  } else {
    return null;
  }
}
