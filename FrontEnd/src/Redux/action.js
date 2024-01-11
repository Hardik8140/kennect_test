import {
  FETCH_COMMENT_FAILURE,
  FETCH_COMMENT_REQUEST,
  FETCH_COMMENT_SUCCESS,
  FETCH_POST_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
} from "./actionType";
import axios from "axios";

export const getPost = () => async (dispatch) => {
  dispatch({ type: FETCH_POST_REQUEST });
  try {
    let res = await axios.get(`http://localhost:8080/post/`);
    // console.log(res.data);
    dispatch({ type: FETCH_POST_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_POST_FAILURE });
  }
};

export const getComment = (id, com) => async (dispatch) => {
  dispatch({ type: FETCH_COMMENT_REQUEST });
  try {
    let res = await axios.post(`http://localhost:8080/post/add/${id}`, com);
    console.log(res.data);
    dispatch({ type: FETCH_COMMENT_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_COMMENT_FAILURE });
  }
};

export const postMessage = (postData) => async (dispatch) => {
  dispatch({ type: FETCH_POST_REQUEST });
  try {
    let res = await axios.post(`http://localhost:8080/post/add`, postData);
    console.log(res.data);
    dispatch({ type: FETCH_POST_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_POST_FAILURE });
  }
};
