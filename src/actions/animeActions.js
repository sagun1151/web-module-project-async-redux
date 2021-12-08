import axios from 'axios';
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCES';
export const FETCH_FAIL = 'FETCH_FAIL';


export const getAnime = (name)=>{
  return (dispatch)=>{
    //dispatch({type:FETCH_START});
    dispatch(fetchStart());
    axios.get(`https://anime-facts-rest-api.herokuapp.com/api/v1/${name}`)
    .then(res => {
      console.log('data',res.data)
      dispatch(fetchSuccess(res.data));
    })
    .catch(err => {
      dispatch(fetchFail(err));
    })   
  }}

export const fetchStart =()=>{
  return ({type:FETCH_START});
}
export const fetchSuccess =(anime)=>{
  return ({type: FETCH_SUCCESS, payload:anime})
}
export const fetchFail =(error)=>{
  return ({type: FETCH_FAIL, payload:error})
}