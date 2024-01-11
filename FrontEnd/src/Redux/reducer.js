import {
  FETCH_COMMENT_FAILURE,
  FETCH_COMMENT_REQUEST,
  FETCH_COMMENT_SUCCESS,
  FETCH_POST_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
} from "./actionType";

const initialState = {
  post: [],
  comment: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POST_REQUEST:
    case FETCH_POST_FAILURE:
    case FETCH_COMMENT_REQUEST:
    case FETCH_COMMENT_FAILURE:
      return { ...state };
    case FETCH_POST_SUCCESS:
      return { ...state, post: payload };
    case FETCH_COMMENT_SUCCESS:
      return { ...state, comment: payload };
    default:
      return state;
  }
};
