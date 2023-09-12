import React from 'react';
import Error from '../Error';
import Spinner from '../Spinner';

const ViewUsers = (props) => {
  const {
    state: { data, isFetching, error },
  } = props;
  if (error) {
    return <Error />;
  }
  return (
    <div>
      {isFetching && <Spinner />}
      {isFetching || data.map(({ id, name }) => <p key={id}>{name}</p>)}
    </div>
  );
};

export default ViewUsers;
