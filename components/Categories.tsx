"use client";

import { fetchCategories } from "lib";
import React, { Suspense, useEffect, useState } from "react";
const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then((res) => setCategories(res));
  }, []);

  const fallback = (
    <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
      {/* <!-- ... --> */}
    </svg>
  );

  return (
    <Suspense fallback={fallback}>
      <div className="flex flex-col p-4 m-2 w-[inherit]">
        <h3 className="text-bold text-xl mb-4">Categories</h3>
        {categories &&
          categories.map((category) => {
            const { title } = category;
            return <p>{title}</p>;
          })}
      </div>
    </Suspense>
  );
};

export default Categories;
