import { client } from "./sanity.client";
import imageUrlbuilder from "@sanity/image-url";
import fetchCategories from "./fetchCategories";

const builder = imageUrlbuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source);
};

export const formatedDate = (date: any) => {
  return new Date(date).toLocaleDateString(undefined, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getTheme() {
  return localStorage.getItem("theme");
}

export function setTheme(theme: string) {
  localStorage.setItem("theme", theme);
}

export { fetchCategories };
