import React from 'react'
import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';
function index() {
  const featuredEvents = getFeaturedEvents();
  return (
      <div>
      <EventList items={ featuredEvents } />
    </div>
  )
}

export default index