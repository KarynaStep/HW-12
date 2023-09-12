import React from 'react';
import { useNavigate } from 'react-router-dom';
import Error from '../../components/Error';

const Page404 = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/', { replace: true });
  }, 3000);
  return (
    <div>
      <Error />
    </div>
  );
};

export default Page404;
