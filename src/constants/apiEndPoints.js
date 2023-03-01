export const BACKEND_URL = 'http://localhost:8000';

export const GET_ALL_EVENTS_DATA = {
  method: 'GET',
  url: '/api/events',
};

export const UPDATE_STATUS = (id) => ({
  method: 'PATCH',
  url: `/api/events/${id}`,
});

export const GET_EVENT_DETAILS = (id) => ({
  method: 'GET',
  url: `/api/events/${id}`,
});

export const GET_THEMES = () => ({
  method: 'GET',
  url: '/api/themes',
});

export const UPDATE_THEMES = () => ({
  method: 'PUT',
  url: '/api/themes',
});
