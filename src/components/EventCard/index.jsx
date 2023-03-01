import React, { useState } from 'react';
import getFormattedDateFromUtcDate from '../../utils/commons/index.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faBookmark,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';

import { faBookmark as regularBookmark } from '@fortawesome/free-regular-svg-icons';

import propTypes from 'prop-types';
import './EventCard.css';

const EventCard = ({ eventData }) => {
  const [isBookmarked, setIsBookMarked] = useState(eventData.isBookmarked);
  const handleClick = () => {
    setIsBookMarked(!isBookmarked);
  };
  return (
    <>
      <div className="event">
        <img src={eventData.imgUrl} alt="event-image"></img>
        <hr />
        <div className="event-metadata">
          <p className="event-heading">{eventData.name}</p>
          <div className="event-meta-metadata">
            <p className="event-description">{eventData.description}</p>
            <p className="event-venue">
              <strong>VENUE: </strong>
              {eventData.venue}
            </p>
            <p className="event-date">
              <strong>DATE: </strong>
              {getFormattedDateFromUtcDate(
                eventData.datetime,
                eventData.timezone
              )}
            </p>
          </div>
          <div className="event-logos">
            <div className="left-logo">
              {eventData.isRegistered ? (
                <div className="event-registered">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    size="1x"
                    color="#42f551"
                  />
                  <p>REGISTERED</p>
                </div>
              ) : (
                !eventData.areSeatsAvailable && (
                  <div className="seats-available">
                    <FontAwesomeIcon
                      icon={faCircleXmark}
                      size="1x"
                      color="#ECECAB"
                    />
                    <p>NO SEATS AVAILABLE</p>
                  </div>
                )
              )}
            </div>
            <div className="event-bookmark">
              {isBookmarked ? (
                <FontAwesomeIcon
                  icon={faBookmark}
                  onClick={handleClick}
                  size="1x"
                  color="red"
                />
              ) : (
                <FontAwesomeIcon
                  icon={regularBookmark}
                  onClick={handleClick}
                  size="1x"
                  color="red"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

EventCard.propTypes = {
  eventData: propTypes.shape({
    isBookmarked: propTypes.bool.isRequired,
    imgUrl: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    venue: propTypes.string.isRequired,
    timezone: propTypes.string.isRequired,
    datetime: propTypes.string.isRequired,
    isRegistered: propTypes.bool.isRequired,
    areSeatsAvailable: propTypes.bool.isRequired,
  }).isRequired,
};
export default EventCard;
