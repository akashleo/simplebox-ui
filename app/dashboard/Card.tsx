// components/Card.tsx

import React from 'react';

type CardProps = {
  merchantName: string;
  merchantType: string;
  spent: number;
  received: number;
};

const Card: React.FC<CardProps> = ({ merchantName, merchantType, spent, received }) => {
  return (
    <div className="w-1/2 bg-gray-100 p-4 rounded-md shadow">
      <h2 className="text-xl font-semibold mb-2">{merchantName}</h2>
      <p>Merchant Type: {merchantType}</p>
      <p>Spent: ${spent}</p>
      <p>Received: ${received}</p>
    </div>
  );
};

export default Card;
