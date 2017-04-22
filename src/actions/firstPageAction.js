
import actionApi from '../constants/actionApi';
import dispatchType from '../constants/dispatchType';
const Api=actionApi.firstPage;
const TYPE=dispatchType.firstPage;

const actions = {
  firstPageNumInit() {

    /*
     *   param是时间段参数，用于获取不同范围数据.可以是hour、day、week、month
     */
    return function(dispatch) {
      fetch(Api.firstPageNumInit).then(data => data.json())
          .then(data => {
            dispatch({
              type: TYPE.firstPageNumInit,
              payload: data
            });
          })
          .catch(function(err){
            console.log(err)
        })
    };
  },
  firstPageFetch(myChart) {
    return function(dispatch) {
      fetch(Api.fetch).then(data => data.json())
        .then(data => {
          dispatch({
            type: TYPE.firstPageFetch,
            payload: data
          })
        })
        .catch(function(err){
          console.log(err)
        })
    }
  }
}



export default actions;