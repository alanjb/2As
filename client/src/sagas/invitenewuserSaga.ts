import { takeEvery, put, call } from 'redux-saga/effects';

// watcher 
export function* watchInviteNewUser(){
    yield takeEvery("INVITE_NEW_USER_REQUEST", inviteNewUserRequestAsync)
}

// worker
function* inviteNewUserRequestAsync() {
    yield put({ type: "AGE_UP_ASYNC", value: 1 });
}

