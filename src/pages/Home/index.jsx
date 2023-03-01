import React, { useEffect, useState } from 'react';
import {
  EventCardGrid,
  Header,
  Filter,
  SearchButton,
} from '/Users/agrima_malhotra/Desktop/frontendevaluation/src/components/index.js';
import makeRequest from '../../utils/makeRequest/makeRequest.js';
import { GET_ALL_EVENTS_DATA } from '../../constants/apiEndPoints.js';
import './Home.css';

const Home = () => {
  const [allEventsData, setAllEventsData] = useState([]);
  useEffect(() => {
    makeRequest({ ...GET_ALL_EVENTS_DATA }, {}).then((data) => {
      setAllEventsData(data);
    });
  }, []);
  const updateEventData = (data) => {
    setAllEventsData(data);
  };
  return (
    <>
      <Header />
      <div className="header-bar">
        <Filter />
        <SearchButton
          allEventsData={allEventsData}
          updateEventData={updateEventData}
        />
      </div>

      {allEventsData ? (
        <div className="home-page">
          <EventCardGrid allEventsData={allEventsData} />
        </div>
      ) : (
        <div className="page-loader">
          <p>Loading...</p>
        </div>
      )}
    </>
  );
};

export default Home;
