// components/App.js
import React, { useState } from 'react';
import HogTile from './HogTile';
import Filter from './Filter';
import Sort from './Sort';
import AddHogForm from './AddHogForm';
import hogsData from '../porkers_data'; // Import hog data correctly

function App() {
  const [hogList, setHogList] = useState(hogsData); // Renamed state variable to hogList
  const [greased, setGreased] = useState(false);
  const [sortType, setSortType] = useState('name');
  const [hiddenHogs, setHiddenHogs] = useState(new Set());

  const toggleGreased = () => setGreased(!greased);

  const handleSort = (type) => setSortType(type);

  const addHog = (newHog) => setHogList([...hogList, newHog]);

  const toggleHideHog = (hogName) => {
    setHiddenHogs((prev) => {
      const newHiddenHogs = new Set(prev);
      if (newHiddenHogs.has(hogName)) newHiddenHogs.delete(hogName);
      else newHiddenHogs.add(hogName);
      return newHiddenHogs;
    });
  };

  const filteredHogs = greased
    ? hogList.filter(hog => hog.greased && !hiddenHogs.has(hog.name))
    : hogList.filter(hog => !hiddenHogs.has(hog.name));

  // Sort hogs without mutating the original state
  const sortedHogs = [...filteredHogs].sort((a, b) => {
    if (sortType === 'weight') return a.weight - b.weight;
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="ui grid container">
      <h1>Hog Wild!</h1>
      <Filter greased={greased} toggleGreased={toggleGreased} />
      <Sort handleSort={handleSort} />
      <AddHogForm addHog={addHog} />
      {sortedHogs.length === 0 ? (
        <p>No hogs available.</p>
      ) : (
        sortedHogs.map(hog => (
          <HogTile key={hog.name} hog={hog} toggleHideHog={toggleHideHog} />
        ))
      )}
    </div>
  );
}

export default App;
