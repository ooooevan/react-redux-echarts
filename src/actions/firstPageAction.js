
import actionApi from '../constants/actionApi';
import dispatchType from '../constants/dispatchType';
const Api = actionApi.firstPage;
const TYPE = dispatchType.firstPage;

const actions = {
  numInit() {

    return function (dispatch) {
      fetch(`${Api.numInit}/`).then(data => data.json())
          .then((data) => {
            dispatch({
              type: TYPE.numInit,
              payload: data
            });
          })
          .catch((err) => {
            console.log(err);
          });
    };
  },
  fetch() {
    return function (dispatch) {
      fetch(`${Api.fetch}/`).then(data => data.json())
        .then((data) => {
          dispatch({
            type: TYPE.fetch,
            payload: data
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
  },
  sellersInit() {
    return function (dispatch) {
      fetch(`${Api.sellersInit}/`).then(data => data.json())
        .then((data) => {
          dispatch({
            type: TYPE.sellersInit,
            payload: data
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
  },

};


export default actions;
