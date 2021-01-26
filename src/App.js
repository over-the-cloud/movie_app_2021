import React from 'react';

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name} </h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: 'Chicken'
    image: 'https://recipe1.ezmember.co.kr/cache/recipe/2015/11/13/2758a56b3dbc5e7df57b021854a758c81.jpg'
  },
  {
    name: 'Pizza'
    image: 'https://recipe1.ezmember.co.kr/cache/recipe/2015/11/13/2758a56b3dbc5e7df57b021854a758c81.jpg'
  },
  {
    name: 'Bossam'
  },
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );      
}

export default App;
