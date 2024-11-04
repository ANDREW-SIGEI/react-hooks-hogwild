import React from 'react';

function Filter({ setShowGreasedOnly, setSortBy }) {
  const handleGreasedChange = (event) => {
    setShowGreasedOnly(event.target.checked);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          onChange={handleGreasedChange}
        />
        Show Greased Hogs Only
      </label>

      <select onChange={handleSortChange}>
        <option value="">Sort By</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  );
}

export default Filter;
