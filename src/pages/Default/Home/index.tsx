import React from 'react';
import { useDispatch } from 'react-redux';

import { signOut } from '../../../store/modules/auth/actions';
import { Button } from '../../../components';

function Home() {
  const dispatch = useDispatch();

  function out() {
    dispatch(signOut());
  }

  return <Button onClick={out} loading={false}>sair</Button>;
}

export default Home;
