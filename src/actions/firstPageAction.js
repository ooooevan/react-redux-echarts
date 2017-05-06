
import actionApi from '../constants/actionApi';
import dispatchType from '../constants/dispatchType';
const Api=actionApi.firstPage;
const TYPE=dispatchType.firstPage;

const actions = {
  numInit() {

    /*
     *   param是时间段参数，用于获取不同范围数据.可以是hour、day、week、month
     */
    return function(dispatch) {
      fetch(Api.numInit).then(data => data.json())
          .then(data => {
            dispatch({
              type: TYPE.numInit,
              payload: data
            });
          })
          .catch(function(err){
            console.log(err)
        })
    };
  },
  fetch() {
    return function(dispatch) {
      fetch(Api.fetch).then(data => data.json())
        .then(data => {
          dispatch({
            type: TYPE.fetch,
            payload: data
          })
        })
        .catch(function(err){
          console.log(err)
        })
    }
  },
  sellersInit() {
    return function(dispatch) {
      fetch(Api.sellersInit).then(data => data.json())
        .then(data => {
          dispatch({
            type: TYPE.sellersInit,
            payload: data
          })
        })
        .catch(function(err){
          console.log(err)
        })
    }
  },

}



export default actions;