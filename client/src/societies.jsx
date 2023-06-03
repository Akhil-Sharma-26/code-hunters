import React from 'react';
import Card from './card';

const societies = () => {
  // Sample data for cards
  const cards = [
    {
      id: 1,
      image: './Assets/1.png',
      title: 'Card 1',
    },
    {
      id: 2,
      image: './Assets/2.webp',
      title: 'Card 2',
    },
    // Add more cards as needed
  ];

  return (
    <div className="card-gallery">
      {cards.map(card => (
        <Card key={card.id} image={card.image} title={card.title} />
      ))}
    </div>
  );
};

export default societies;
