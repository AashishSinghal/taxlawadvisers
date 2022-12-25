"use client";

import React, { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import {
  capitalizeFirstLetter,
  getTheme,
  setTheme as setLocalTheme,
} from "lib";

const ThemeSwitch = () => {
  /*Initialize under useEffect */

  useEffect(() => {
    themeChange(false);
  }, []);
  // const [theme, setTheme] = useState("light");
  const themes = ["light", "dark"];

  // useEffect(() => {
  //   setTheme((prev) => {
  //     updateDocumentTheme(getTheme() || prev);
  //     return getTheme() || prev;
  //   });
  // }, []);

  // const updateDocumentTheme = (theme: string) => {
  //   const html = document.getElementsByTagName("html");
  //   html[0]?.setAttribute("data-theme", theme);
  // };

  // const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   // e.preventDefault()
  //   updateDocumentTheme(e.target.value);
  //   setLocalTheme(e.target.value);
  //   setTheme(e.target.value);
  // };

  return (
    <select
      className="select-bordered select w-min max-w-xs"
      data-choose-theme
      // value={theme}
      // onChange={(e) => handleThemeChange(e)}
    >
      {themes.map((t) => {
        return (
          <option key={t} value={t}>
            {capitalizeFirstLetter(t)}
          </option>
        );
      })}
    </select>
  );
};

export default ThemeSwitch;
