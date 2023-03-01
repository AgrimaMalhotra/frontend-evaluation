import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import propTypes from 'prop-types';

const SearchButton = ({ allEventsData, updateEventData }) => {
  const [inputEvent, setInputEvent] = useState('');
  const handleClick = () => {
    const updatedData = allEventsData.filter((obj) => {
      {
        obj.name === inputEvent;
      }
    });
    updateEventData(updatedData);
  };
  return (
    <div className="search-button">
      <input
        type="text"
        placeholder="EVENT NAME"
        onChange={(e) => {
          setInputEvent(e.target.value);
        }}
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        onClick={handleClick}
        size="2x"
      />
    </div>
  );
};

SearchButton.propTypes = {
  allEventsData: propTypes.array.isRequired,
  updateEventData: propTypes.func.isRequired,
};
export default SearchButton;
