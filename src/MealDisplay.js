import React from 'react';

function MealDisplay ({title, imageURL, mealID}) {

   return (
      <div>
         <h2> {title} </h2>
         <img src={imageURL} alt="image of food" ></img>
      </div>
   )
}

export default MealDisplay;