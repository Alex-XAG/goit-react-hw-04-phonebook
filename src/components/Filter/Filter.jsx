import React from 'react';
import PropTypes from 'prop-types';
import { FilterLabel, FilerInput } from './Filter.styled';

export const Filter = ({ option, handleFilter }) => {
  return (
    <>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilerInput
        name="filter"
        type="text"
        value={option}
        onChange={handleFilter}
      />
    </>
  );
};

Filter.propTypes = {
  option: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};
