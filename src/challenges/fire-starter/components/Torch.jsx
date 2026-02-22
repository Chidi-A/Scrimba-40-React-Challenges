import React from 'react';

export default function Torch({ torchEquipped }) {
  return (
    !torchEquipped && (
      <div className="inner-torch-container">
        <img src="./public/torch.png" />
        <div className="torch-flame vibrate-less">🔥</div>
      </div>
    )
  );
}
