import { all, call } from "redux-saga/effects";
import { PersonalHomepage } from "./features/PersonalHomepage";

export default function* saga() {
  yield all([call(PersonalHomepage)])
};