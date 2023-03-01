import React from 'react';
import EventCard from '../EventCard';
import propTypes from 'prop-types';
import './EventCardGrid.css';
const EventCardGrid = ({ allEventsData }) => {
  return (
    <div className=" grid padding">
      {allEventsData.map((eventDetail) => (
        <EventCard key={eventDetail.id} eventData={eventDetail} />
      ))}
    </div>
  );
};

EventCardGrid.propTypes = {
  allEventsData: propTypes.array.isRequired,
};
export default EventCardGrid;
