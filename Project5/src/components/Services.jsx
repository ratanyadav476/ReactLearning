import React, { useEffect, useState } from 'react';

function Services() {
  const [recipe, setRecipe] = useState([]);

  async function FetichingData() {
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';
    try {
      const res = await fetch(url);
      const data = await res.json();
      setRecipe(data.meals);
      console.log(data.meals);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    FetichingData();
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 font-semibold   gap-6">
      {recipe.map((item) => (
        <div
          className="bg-gray-900  shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
          key={item.idMeal}
        >
          <img
            src={item.strMealThumb}
            alt={item.strMeal}
            className="w-full h-48 object-cover"
          />

          <div className="p-4 space-y-2">
            <h2 className="text-xl font-bold text-blue-700">{item.strMeal}</h2>
            <p className="text-sm text-gray-600 italic">
              Area: <span className="font-semibold">{item.strArea}</span> | Category:{' '}
              <span className="font-semibold">{item.strCategory}</span>
            </p>

            <p className="text-violet-600 font-semibold text-sm line-clamp-4">
              {item.strInstructions}
            </p>

            <div className="mt-2">
              <h3 className="font-extrabold text-2xl text-white mb-1">Ingredients:</h3>
              <ul className="list-disc list-inside text-sm text-green-700 grid grid-cols-2 gap-x-2">
                <li>{item.strIngredient1}</li>
                <li>{item.strIngredient2}</li>
                <li>{item.strIngredient3}</li>
                <li>{item.strIngredient4}</li>
                <li>{item.strIngredient5}</li>
                <li>{item.strIngredient6}</li>
                <li>{item.strIngredient7}</li>
              </ul>
            </div>

            <div className="mt-2">
              <h3 className="font-extrabold text-white text-2xl   mb-1">Measurements:</h3>
              <ul className="list-disc list-inside text-sm text-rose-700 grid grid-cols-2 gap-x-2">
                <li>{item.strMeasure1}</li>
                <li>{item.strMeasure2}</li>
                <li>{item.strMeasure3}</li>
                <li>{item.strMeasure4}</li>
                <li>{item.strMeasure5}</li>
                <li>{item.strMeasure6}</li>
                <li>{item.strMeasure7}</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;
