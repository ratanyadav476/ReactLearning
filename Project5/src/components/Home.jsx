import React, { useEffect, useState } from 'react';

function Home() {
  const [apiData, setApiData] = useState([]);

  async function apicall() {
    const url = "https://dummyjson.com/recipes?limit=6&skip=0&select=name,image";

    try {
      const response = await fetch(url);
      const data = await response.json(); // ✅ Fix here
      setApiData(data.recipes); // ✅ Extract only recipes array
    } catch (error) {
      console.log("your error is ", error);
    }
  }

  useEffect(() => {
    apicall();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {apiData.map((item) => (
        <div key={item.id} className="bg-gray-950 shadow-md rounded p-4">
          <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded" />
          <p className="mt-2 text-lg font-semibold">{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
