import fetchJsonp from 'fetch-jsonp';
const TOKEN = '265290872.5704d56.92baa434d9324d14852b2f82391393fd';

export const REQUEST_USER_INFO = 'REQUEST_USER_INFO';
function requestUserInfo(user) {
  console.log('REQUEST_USER_INFO', user);
  return {
    type: REQUEST_USER_INFO,
    user
  }
}

export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO';
function receiveUserInfo(user) {
  console.log('RECEIVE_USER_INFO', user);
  return {
    type: RECEIVE_USER_INFO,
    user
  }
}

export function fetchUserInfo(user) {
  console.log('fetchUserInfo', user);
  return function (dispatch) {
    dispatch(requestUserInfo(user));
    return fetchJsonp(`https://api.instagram.com/v1/users/${user}/?access_token=${TOKEN}`)
      .then(response => response.json())
      .then(json => dispatch(receiveUserInfo(json.data)))
  }
}

export const REQUEST_POSTS = 'REQUEST_POSTS';
function requestPosts(user) {
  console.log('REQUEST_POSTS', user);
  return {
    type: REQUEST_POSTS,
    user
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
function receivePosts(posts) {
  console.log('RECEIVE_POSTS', posts);
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

export function fetchPosts(user) {
  console.log('fetchPosts', user);
  return function (dispatch) {
    dispatch(requestPosts(user));
    return fetchJsonp(`https://api.instagram.com/v1/users/${user}/media/recent/?access_token=${TOKEN}&count=12`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json)))
  }
}

export const RECEIVE_NEXT_PAGE = 'RECEIVE_NEXT_PAGE';
function receiveNextPage(posts) {
  console.log('RECEIVE_NEXT_PAGE', posts);
  return {
    type: RECEIVE_NEXT_PAGE,
    posts
  }
}

export function fetchNextPage() {
  console.log('fetchNextPage');
  return function (dispatch, getState) {
    return fetchJsonp(getState().currentPosts.pagination.next_url)
      .then(response => response.json())
      .then(json => dispatch(receiveNextPage(json)))
  }
}
