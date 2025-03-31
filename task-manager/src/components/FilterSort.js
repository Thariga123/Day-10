import React from 'react';

const FilterSort = ({ onFilterChange, onSortChange }) => {
  return (
    <div>
      <select onChange={(e) => onFilterChange(e.target.value)}>
        <option value="">All</option>
        <option value="Open">Open</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button onClick={() => onSortChange('asc')}>Sort by Due Date (Asc)</button>
      <button onClick={() => onSortChange('desc')}>Sort by Due Date (Desc)</button>
    </div>
  );
};

export default FilterSort;