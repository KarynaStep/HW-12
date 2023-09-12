import React from 'react';
import LoaderData from '../../components/LoaderData';
import ViewUsers from '../../components/ViewUsers';
import { getUsersJSON } from '../../api';

const UsersBlock = () => {
  return (
    <>
      <h2>Users:</h2>
      <LoaderData
        loadData={getUsersJSON}
        render={(state) => <ViewUsers state={state} />}
      />
    </>
  );
};

export default UsersBlock;
