import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css'; // Ensure Semantic UI CSS is imported

function HogTile({ hog, onHide }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="ui card">
      <div className="image">
        <img src={hog.image} alt={hog.name} />
      </div>
      <div className="content">
        <h3 className="header">{hog.name}</h3>
        <div className="extra content">
          <button className="ui button" onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>
          <button className="ui red button" onClick={onHide}>Hide Hog</button>
        </div>
      </div>
      {showDetails && (
        <div className="extra content">
          <p><strong>Specialty:</strong> {hog.specialty}</p>
          <p><strong>Weight:</strong> {hog.weight}</p>
          <p><strong>Greased:</strong> {hog.greased ? 'Yes' : 'No'}</p>
          <p><strong>Highest Medal:</strong> {hog.medal}</p>
        </div>
      )}
    </div>
  );
}

export default HogTile;
