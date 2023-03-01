import React, { useState, useEffect } from 'react';
import { Header, EventCard } from '../../components/index.js';
import { useNavigate, useParams } from 'react-router-dom';
import makeRequest from '../../utils/makeRequest/makeRequest.js';
import { GET_EVENT_DETAILS } from '../../constants/apiEndPoints.js';

const EventDetails = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const handleHeaderClick = () => {
    navigate('/');
  };
  const [eventData, setEventData] = useState({});

  useEffect(() => {
    async function callEventData() {
      const data = await makeRequest(GET_EVENT_DETAILS(eventId), {});
      setEventData(data);
    }
    callEventData();
  }, []);
  return (
    <>
      <div className="clickable-header" onClick={handleHeaderClick}>
        <Header />
      </div>
      <EventCard eventData={eventData} />
    </>
  );
};

export default EventDetails;
