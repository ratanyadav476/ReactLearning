import React, { useEffect, useState } from 'react';

function Contact() {
  const [recipe, setRecipe] = useState([]);

  async function SweetData() {
    let url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert";
    try {
      const response = await fetch(url);
      const data = await response.json();
      setRecipe(data.meals); // ✅ desserts list
      console.log(data.meals);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    SweetData();
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-4">
      {recipe.map((item) => (
        <div key={item.idMeal} className="bg-gray-500 rounded shadow p-2 text-center">
          <img
            src={item.strMealThumb}
            alt={item.strMeal}
            className="w-full h-40 object-cover rounded"
          />
          <p className="mt-2 font-semibold">{item.strMeal}</p>
          <h3>{item.idMeal}</h3>
        </div>
      ))}
    </div>
  );
}

export default Contact;
