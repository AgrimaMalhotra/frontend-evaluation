import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChevronUp,
  faFilter,
} from '@fortawesome/free-solid-svg-icons';
// import { faCircle } from '@fortawesome/free-regular-svg-icons';
import './Filter.css';
const Filter = () => {
  const [hasClickedFilter, setHasClickedFilter] = useState(false);
  const handleClick = () => {
    setHasClickedFilter(!hasClickedFilter);
  };
  return (
    <div className="filter padding">
      <div className="filter-option">
        <FontAwesomeIcon icon={faFilter} size="2x" />
        <p>FILTER</p>
        {hasClickedFilter ? (
          <FontAwesomeIcon
            icon={faChevronDown}
            onClick={handleClick}
            size="2x"
          />
        ) : (
          <FontAwesomeIcon icon={faChevronUp} onClick={handleClick} size="2x" />
        )}
        {/* <div className="filter-dropdown">
          {/* <ul>
            <FontAwesomeIcon icon={faCircle} onClick={handleClick} size="1x" />
          </ul> 
        </div> */}
      </div>
    </div>
  );
};

export default Filter;
