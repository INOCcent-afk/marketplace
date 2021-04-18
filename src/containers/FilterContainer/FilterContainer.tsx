import React from "react";
import styled from "styled-components";
import Filter from "../../components/Filter";

const FilterContainer: React.FC = () => {
  return (
    <FilterWrapper>
      <h2>FILTERS</h2>
      <Filter />
    </FilterWrapper>
  );
};

export default FilterContainer;

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
`;
