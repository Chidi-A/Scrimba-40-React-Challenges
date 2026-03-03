import React from 'react';

export default function BuyTickets() {
  return (
    <div className="buy-tickets-container">
      <button onClick={() => console.log('🎸 Tickets requested!  🎸')}>
        Buy Tickets
      </button>
    </div>
  );
}
