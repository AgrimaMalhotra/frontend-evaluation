import React, { useState } from 'react';
import getFormattedDateFromUtcDate from '../../utils/commons/index.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faBookmark,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';

import { faBookmark as regularBookmark } from '@fortawesome/free-regular-svg-icons';
import { EVENT_DETAILS } from '../../constants/routes.js';
import propTypes from 'prop-types';
import './EventCard.css';
import { useNavigate } from 'react-router-dom';
import makeRequest from '../../utils/makeRequest/makeRequest.js';
import { UPDATE_STATUS } from '../../constants/apiEndPoints.js';

const EventCard = ({ eventData, specificEvent }) => {
  const navigate = useNavigate();
  const [isBookmarked, setIsBookMarked] = useState(eventData.isBookmarked);
  const [isRegistered, setIsRegistered] = useState(eventData.isRegistered);
  const handleClick = async () => {
    await makeRequest(UPDATE_STATUS(eventData.id), {
      data: {
        isBookmarked: !isBookmarked,
      },
    });
    setIsBookMarked(!isBookmarked);
  };
  const handleCardClick = () => {
    navigate(`${EVENT_DETAILS}/${eventData.id}`);
  };

  const handleRegister = async () => {
    await makeRequest(UPDATE_STATUS(eventData.id), {
      data: {
        isRegistered: !isRegistered,
      },
    });
    setIsRegistered(!isRegistered);
  };
  return (
    <>
      <div className="event">
        <img
          src={eventData.imgUrl}
          alt="event-image"
          onClick={handleCardClick}
        ></img>
        <hr />
        <div className="event-metadata" onClick={handleCardClick}>
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
              {isRegistered ? (
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
                  size="2x"
                  color="#EA8282"
                />
              ) : (
                <FontAwesomeIcon
                  icon={regularBookmark}
                  onClick={handleClick}
                  size="2x"
                  color="#EA8282"
                />
              )}
            </div>
          </div>

          {specificEvent && eventData.areSeatsAvailable && (
            <div className="register-button">
              {isRegistered ? (
                <button onClick={handleRegister}>UNREGISTER</button>
              ) : (
                <button onClick={handleRegister}>REGISTER</button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

EventCard.propTypes = {
  eventData: propTypes.shape({
    id: propTypes.string.isRequired,
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
  specificEvent: propTypes.bool,
};
export default EventCard;
