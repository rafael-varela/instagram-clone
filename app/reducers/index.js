import { combineReducers } from 'redux';
import { REQUEST_USER_INFO, RECEIVE_USER_INFO, REQUEST_POSTS, RECEIVE_POSTS, RECEIVE_NEXT_PAGE} from '../actions';

function currentUser(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USER_INFO:
      return action.user;

    case REQUEST_USER_INFO:
    default:
      return state;
  }
}

function currentPosts(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_NEXT_PAGE:
      return Object.assign({}, state, {
        data: state.data.concat(action.posts.data),
        pagination: action.posts.pagination
      });
    case REQUEST_POSTS:
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  currentUser,
  currentPosts
});

export default rootReducer;
