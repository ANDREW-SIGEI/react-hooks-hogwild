import React, { useState } from 'react';

function AddHogForm({ addHog }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [weight, setWeight] = useState('');
  const [greased, setGreased] = useState(false);
  const [medal, setMedal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHog = {
      name,
      image,
      specialty,
      weight: parseInt(weight),
      greased,
      'highest medal achieved': medal,
    };
    addHog(newHog);
    setName('');
    setImage('');
    setSpecialty('');
    setWeight('');
    setGreased(false);
    setMedal('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <input 
        type="text" 
        placeholder="Image URL" 
        value={image} 
        onChange={(e) => setImage(e.target.value)} 
        required 
      />
      <input 
        type="text" 
        placeholder="Specialty" 
        value={specialty} 
        onChange={(e) => setSpecialty(e.target.value)} 
        required 
      />
      <input 
        type="number" 
        placeholder="Weight" 
        value={weight} 
        onChange={(e) => setWeight(e.target.value)} 
        required 
      />
      <label>
        <input 
          type="checkbox" 
          checked={greased} 
          onChange={() => setGreased(!greased)} 
        />
        Greased?
      </label>
      <input 
        type="text" 
        placeholder="Highest Medal Achieved" 
        value={medal} 
        onChange={(e) => setMedal(e.target.value)} 
        required 
      />
      <button type="submit">Add Hog</button>
    </form>
  );
}

export default AddHogForm;
