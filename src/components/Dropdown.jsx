import '../styles/dropdown.css';

import React, { useState } from 'react';

const StatusDropdown = ({ options }) => {
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  // Handles selection and closes the dropdown
  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      {/* Dropdown Header (Click to Open) */}
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        {selected} ▼
      </div>

      {/* Dropdown Menu (Shows when isOpen = true) */}
      {isOpen && (
        <div className="dropdown-content">
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StatusDropdown;
