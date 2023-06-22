import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/resultTitle';




function EventFilterPage() {
  const router = useRouter();
  const filterData = router.query.slug;
  console.log(router.query)
  if (!filterData) {
    return <p className='center'>Loading....</p>
  }
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  if (isNaN(numMonth) || isNaN(numYear)) {
    return <p>Invalid Filters</p>
  }
  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth
    
  })
  if (!filteredEvents || filteredEvents.length < 1) {
    return <p>No Events found for the choosen filter</p>
  }
  return (
    <Fragment>
      <ResultsTitle/>
      <EventList items={ filteredEvents} />
    </Fragment>
  )
}

export default EventFilterPage