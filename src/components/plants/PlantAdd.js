import React from "react";
import PlantForm from "./PlantForm";
import { PlantSearch } from "./PlantSearch";

export const PlantAdd = () => {
  return (
    <div className="container mx-auto px-6 md:max-w-3xl object-left-top font-mono">
      <h1 className="mt-6">Add a Plant to Your Home:</h1>
      <PlantSearch />
      <h2 className="mt-6">Or add plant information manually:</h2>
      <PlantForm />
    </div>
  );
};
