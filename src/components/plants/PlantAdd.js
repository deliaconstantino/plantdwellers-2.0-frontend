import React from "react";
import { PlantSearch } from "./PlantSearch";

export const PlantAdd = () => {
  return (
    <div className="container mx-auto px-6 md:max-w-3xl object-left-top font-mono">
      <h1 className="mt-6">Add a Plant:</h1>
      <div className="md:max-w-3xl mx-auto">
      <PlantSearch />
      </div>
    </div>
  );
};
