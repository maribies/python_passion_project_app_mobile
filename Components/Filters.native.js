import React from "react";
import styled from "@emotion/native";
import { H3, MainText } from "./Text.native";
import { useFilters } from "../Hooks/useFilters";

const FilterButton = styled.TouchableOpacity`
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.dark : props.theme.colors.primary};
  border-radius: ${(props) => props.theme.inputs.borderRadius};
  padding: ${(props) => props.theme.inputs.padding};
  margin-right: 8px;
  margin-bottom: 8px;
`;

const CloseButton = styled.TouchableOpacity`
  position: absolute;
  right: -16;
  top: -8;
  padding: 8px;
`;

const FiltersContainer = styled.View`
  justify-content: center,
  align-items: center,
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: ${(props) => props.theme.margin};
  flex: 1;
`;

const FiltersWrapper = styled.View`
  flex-direction: row;
`;

const FilterText = styled(MainText)`
  color: ${(props) => (props.isActive ? "white" : "black")};
  margin-bottom: 0;
  padding-right: ${(props) => (props.isActive ? "16px" : 0)};
`;

export const filterOrSubfilter = (filters, filter) => {
  if (filters.subcategories.includes(filter)) {
    // TODO: Proper filter function
    console.log(`TODO... Will filter products based on ${filter}.`);
    return;
  }

  // TODO: allow for multiple categories
  return filters.updateFilters(filter);
};

export const createFilter = (filters, filter) => {
  const title = filter.charAt(0).toUpperCase() + filter.slice(1);
  const isActive = filters.activeFilters.includes(filter);

  return (
    <FilterButton
      onPress={() => {
        filterOrSubfilter(filters, filter);
        filters.updateActiveFilters(filter);
      }}
      key={title}
      isActive={isActive}
    >
      <FilterText isActive={isActive}>{title}</FilterText>
      {isActive && (
        <CloseButton
          onPress={() => {
            filters.clearAllFilters();
          }}
        >
          <FilterText isActive={isActive}>x</FilterText>
        </CloseButton>
      )}
    </FilterButton>
  );
};

export const createFilters = (filters) => {
  return filters.names.map((filter) => {
    return createFilter(filters, filter);
  });
};

export const Filters = ({ types = null }) => {
  if (!types) {
    return null;
  }

  const filters = useFilters(types.filters);

  return (
    <FiltersWrapper>
      <FiltersContainer>
        <H3 style={{ marginBottom: 0, marginTop: 8, marginRight: 20 }}>
          Filters
        </H3>

        {createFilters(filters)}
      </FiltersContainer>
    </FiltersWrapper>
  );
};
