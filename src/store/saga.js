import { takeLatest,takeEvery, put,call } from "redux-saga/effects";
import auth from '../../src/auth';


function* fetchUpAsync() {
  var username =  auth.authenticated.username.toUpperCase();
   console.log("getData");
   const json = yield call(() =>
     fetch("/claritybqm/reportFetch/?scriptName=DC_USER&userid=" + username)
       .then(response => response.json())
       .then(myJson => myJson)
   );
   yield put({ type: "FETCH_DATA_USER", value: json });
   console.log(json,username)
 }

//  function* fetchBadge() {
//   console.log("getbadge");
//   const json = yield call(() =>
//     fetch("/claritybqm/reportFetch/?scriptName=DC_BADGE")
//       .then(response => response.json())
//       .then(myJson => myJson)
//   );
//   yield put({ type: "FETCH_BADGE_USER", value: json });
//   console.log(json)
// }

function* fetchRack() {
  console.log("getRack");
    const json = yield call(() =>
    fetch("/claritybqm/reportFetch/?scriptName=DC_RACK")
      .then(response => response.json())
      .then(data => data )
  );
  yield put({ type: "FETCH_DATA_RACK", value: json });
  console.log(json)
}



export function* watchFetchData() {
  yield takeEvery("FETCH_USER", fetchUpAsync);
 // yield takeEvery("FETCH_BADGE", fetchBadge);
  yield takeEvery("FETCH_RACK", fetchRack);
 
}
