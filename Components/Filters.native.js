import React, { useState } from "react";
import styled from "@emotion/native";
import { H3, MainText } from "./Text.native";

// TODO: space underneath only needed if wrapping.
const FilterButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.inputs.borderRadius};
  padding: ${(props) => props.theme.inputs.padding};
  margin-right: 8px;
  margin-bottom: 8px;
`;

// TODO: Doesn't respect parent container.
const FiltersContainer = styled.View`
  justify-content: center,
  align-items: center,
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: ${(props) => props.theme.marginBottom};
`;

const FiltersWrapper = styled.View`
  flex-direction: row;
`;

const openFilterOrSubFilters = (filter, subFilters, setFilters) => {
  if (!subFilters || subFilters == []) {
    // TODO: Proper filter function
    console.log(`TODO... Will filter products based on ${filter}.`);
    return;
  }

  // TODO: allow for multiple categories
  // TODO: allow to clear?
  return setFilters(subFilters);
};

const createFilter = (filter, allFilters, setFilters) => {
  const title = filter.charAt(0).toUpperCase() + filter.slice(1);

  const subFilters = allFilters[filter];

  return (
    <FilterButton
      onPress={() => {
        openFilterOrSubFilters(filter, subFilters, setFilters);
      }}
      key={title}
    >
      <MainText style={{ marginBottom: 0 }}>{title}</MainText>
    </FilterButton>
  );
};

const createFilters = (filters, allFilters, setFilters) => {
  return filters.map((filter) => {
    return createFilter(filter, allFilters, setFilters);
  });
};

const getGroupFilters = (allFilters) => {
  const keys = Object.keys(allFilters);

  return keys;
};

export const Filters = ({ types = null }) => {
  if (!types) {
    return <H3>Something is wrong.`</H3>;
  }

  const allFilters = types.filters;

  const filterGroups = getGroupFilters(allFilters);

  const [filters, setFilters] = useState(filterGroups);

  return (
    <FiltersWrapper>
      <H3 style={{ marginBottom: 0, marginTop: 8, marginRight: 20 }}>
        Filters
      </H3>

      <FiltersContainer>
        {createFilters(filters, allFilters, setFilters)}
      </FiltersContainer>
    </FiltersWrapper>
  );
};
