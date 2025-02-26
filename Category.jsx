import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Category() {
  const [state, setState] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const { category } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3007/${category}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setState(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [category]);

  const sortedData = [...state].sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price
  );

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-center gap-4 mb-6">
        <button
          className="px-4 py-2 bg-blue-500 text-black"
          onClick={() => setSortOrder("asc")}
        >
          Sort by Price (Low to High)
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-black"
          onClick={() => setSortOrder("desc")}
        >
          Sort by Price (High to Low)
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedData.map((el, i) => (
          <Link
            key={i}
            to={`/${category}/${el.id}`}
            className="block bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105"
          >
            <img
              src={el.img}
              alt={el.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{el.title}</h3>
              <p className="text-gray-700">
                Price: <span className="font-bold">${el.price}</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
