import React, { useState } from 'react';
import '../static/css/Dropdown.css'
const MultySelectDropdown = () => {
  const [type, setType] = useState('none');
  const [specifyType, setSpecifyType] = useState('none');

  const types = {
    none: ['Please Select'],
    nationalParks: ['<5', '5-10', '>10'],
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
    setSpecifyType(types[event.target.value][0]);
  };

  const handleSpecifyTypeChange = (event) => {
    setSpecifyType(event.target.value);
  };

  return (
    <div className='multy-select-dropdown'>
      <div className='multy-select-dropdown-hobby'>
        <label aria-label="select number">
          Please select how many national parks you have been to:
          <select
            id="type"
            value={type}
            onChange={handleTypeChange}
          >
            <option value="none">Please Select</option>
            {types.nationalParks.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
          </select>
        </label>
      </div>
      <div className='multy-select-dropdown-specify-type'>
        <label aria-label="select the specific national parks you plan to goe">
          Please select a specific national park you plan to go:
          <select
            id="specifyType"
            value={specifyType}
            onChange={handleSpecifyTypeChange}
          >
            {types[type].map((specifyType) => (
              <option key={specifyType} value={specifyType}>{specifyType}</option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
};

export default MultySelectDropdown;