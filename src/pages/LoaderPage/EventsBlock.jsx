import React from 'react';
import LoaderData from '../../components/LoaderData';
import { getEventsJSON } from '../../api';
import ViewEvents from '../../components/ViewEvents';

const EventsBlock = () => {
  return (
    <>
      <h2>Events:</h2>
      <LoaderData
        loadData={getEventsJSON}
        render={(state) => <ViewEvents state={state} />}
      />
    </>
  );
};

export default EventsBlock;
