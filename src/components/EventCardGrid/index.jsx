import React from 'react';
import EventCard from '../EventCard';
import propTypes from 'prop-types';
import './EventCardGrid.css';

const EventCardGrid = ({ allEventsData }) => {
  console.log(allEventsData);
  allEventsData.sort(
    (first, second) => new Date(first.datetime) - new Date(second.datetime)
  );
  console.log(allEventsData);
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
