import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';

import { signInSucess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.get, '/user');

    const { token } = response.data[0];

    api.defaults.headers.Authorization = `Bearer ${token}`;

    toast.success('Autenticado com sucesso.');

    yield put(signInSucess(token));
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      toast.error(error.response.data.error);
    } else {
      toast.error('Ocorreu algum erro tente novamente mais tarde.');
    }

    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
