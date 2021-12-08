import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL }from './../actions/animeActions'

const initialState = {
  animePick:[],
  animeImg:'',
  isFetching:false,
  error:''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case(FETCH_START):
      return({
        ...state,
        animePick: [],
        isFetching: true,
        errors:'',
      })
    case(FETCH_SUCCESS):
      return({
        ...state,
        animePick: action.payload.data,
        animeImg:action.payload.img,
        isFetching: false,
        errors:'',
      })
    case(FETCH_FAIL):
    return({
      ...state,
      animePick:[],
      isFetching:false,
      error:action.payload,
    })
    default:
      return state;
  }
};
