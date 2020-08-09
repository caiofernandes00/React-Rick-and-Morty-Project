import { select, takeEvery, call, put } from 'redux-saga/effects';

import { CHARACTERS } from '../types';
import { fetchAllCharacters, fetchSingleCharacter } from '../../apis/fetchData';

import { setCharacters, setCharactersError } from '../actions';

const getPage = (state) => state.nextPage;
const getSearch = (state) => state.searchName;

function* handleCharactersLoad() {
  try {
    const page = yield select(getPage);
    const images = yield call(fetchAllCharacters, page);
    yield put(setCharacters(images.results));
  } catch (err) {
    yield put(setCharactersError(err.toString()));
  }
}

function* handleSearchCharacters() {
  try {
    const name = yield select(getSearch);
    const images = yield call(fetchSingleCharacter, name);
    yield put(setCharacters(images.results));
  } catch (err) {
    yield put(setCharactersError(err.toString()));
  }
}

export default function* watchImagesLoad() {
  yield takeEvery(CHARACTERS.LOAD_DEFAULT, handleCharactersLoad);
  yield takeEvery(CHARACTERS.LOAD_SEARCH, handleSearchCharacters);
}
