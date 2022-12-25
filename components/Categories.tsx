"use client";

import { fetchCategories } from "lib";
import React, { Suspense, useEffect, useState } from "react";
import CustomSuspense from "./CustomSuspense";
const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then((res) => setCategories(res));
  }, []);

  return (
    <CustomSuspense>
      <div className="flex flex-col p-4 m-2 w-[inherit]">
        <h3 className="text-bold text-xl mb-4">Categories</h3>
        {categories &&
          categories.map((category) => {
            const { _id, title } = category;
            return <p key={_id}>{title}</p>;
          })}
      </div>
    </CustomSuspense>
  );
};

export default Categories;
