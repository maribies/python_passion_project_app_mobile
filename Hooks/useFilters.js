import { useState } from "react";

export const getSubfilters = (filter, allFilters) => {
  return allFilters[filter];
};

export const getAllSubfilters = (allFilters) => {
  return Object.values(allFilters).flat();
};

export const getGroupFilters = (allFilters) => {
  return Object.keys(allFilters);
};

export const useFilters = (filters) => {
  const categories = getGroupFilters(filters);
  const subcategories = getAllSubfilters(filters);

  const [names, setFilters] = useState(categories);
  const [activeFilters, setActiveFilters] = useState([]);

  const updateFilters = (filter) => {
    return setFilters(categories.concat(getSubfilters(filter, filters)));
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
    return setFilters(categories);
  };

  const updateActiveFilters = (filter) => {
    return setActiveFilters(filter);
  };

  return {
    names,
    subcategories,
    updateFilters,
    clearAllFilters,
    activeFilters,
    updateActiveFilters,
  };
};
