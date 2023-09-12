import React from 'react';
import Error from '../Error';
import Spinner from '../Spinner';

const ViewEvents = (props) => {
  const {
    state: { data, isFetching, error },
  } = props;
  if (error) {
    return <Error />;
  }
  return (
    <div>
      {isFetching && <Spinner />}
      {isFetching ||
        data.map(({ id, title, date }) => (
          <article key={id}>
            <h3>{title}</h3>
            <h4>{date}</h4>
          </article>
        ))}
    </div>
  );
};

export default ViewEvents;
