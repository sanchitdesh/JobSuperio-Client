import React from "react";

const categories = [
  { title: "Accounting / Finance", openPositions: 2 },
  { title: "Marketing / Sales", openPositions: 5 },
  { title: "Engineering", openPositions: 8 },
  { title: "Human Resources", openPositions: 3 },
];

const JobCategories = () => {
  return (
    <section className="bg-white py-16 border-b">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Popular Job Categories</h1>
        <p className="text-gray-600 text-sm mb-8">2020 jobs live - 293 added today.</p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {categories.map((category, index) => (
          <div key={index} className="border border-gray-300 rounded-md shadow-sm overflow-hidden transition-transform transform hover:scale-105">
            <div className="flex items-center space-x-4 p-6">
              <span className="flex items-center justify-center px-6 py-4 rounded-md bg-gray-300 hover:bg-blue-600 transition-colors duration-300 text-white text-xl font-bold">
                {category.title[0]}
              </span>
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold text-gray-800">{category.title}</h2>
                <p className="text-gray-500 text-sm">{`(${category.openPositions} open positions)`}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobCategories;
