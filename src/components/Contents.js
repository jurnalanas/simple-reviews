import React from 'react';
import CardsLarge from './CardsLarge';

const Contents = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <CardsLarge/>
      <CardsLarge/>
      <CardsLarge/>
    </div>
  )
}

export default Contents;
