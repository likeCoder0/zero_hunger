import React from 'react';
import Card from './Card';

function SearchList({ filteredFoods }) {
  const filtered = filteredFoods.map(food =>  <Card key={food.id} food={food} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;