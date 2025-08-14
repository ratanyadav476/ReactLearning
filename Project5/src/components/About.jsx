import React, { useEffect, useState } from 'react';

function About() {
  const [meals, setMeals] = useState([]);

  async function NonWedgeMeal() {
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken";
    try {
      const response = await fetch(url);
      const data = await response.json(); // ✅ Fix here
      setMeals(data.meals);               // ✅ meals is inside data
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    NonWedgeMeal();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {meals.map((meal) => (
        <div key={meal.idMeal} className="bg-gray-750 shadow-md rounded p-4">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full h-48 object-cover rounded"
          />
          <p className="mt-2 text-lg font-semibold">{meal.strMeal}</p>
        </div>
      ))}
    </div>
  );
}

export default About;
