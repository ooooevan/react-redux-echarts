import actionApi from '../constants/actionApi';
import dispatchType from '../constants/dispatchType';
const Api=actionApi.compare;
const TYPE=dispatchType.compare;

export default {
	numInit(time) {
    return function(dispatch) {
      let url=Api.numInit+'?'+time;
      fetch(url).then(data => data.json())
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
  oldOrNewInit(time){
    return function(dispatch) {
      let url=Api.oldOrNewInit+'?'+time;
      fetch(url).then(data => data.json())
          .then(data => {
            dispatch({
              type: TYPE.oldOrNewInit,
              payload: data
            });
          })
          .catch(function(err){
            console.log(err)
        })
    };
  },
  deepVisitInit(time){
    return function(dispatch) {
      let url=Api.deepVisitInit+'?'+time;
      fetch(url).then(data => data.json())
          .then(data => {
            dispatch({
              type: TYPE.deepVisitInit,
              payload: data
            });
          })
          .catch(function(err){
            console.log(err)
        })
    };
  },
  outInit(time){
    return function(dispatch) {
      let url=Api.outInit+'?'+time;
      fetch(url).then(data => data.json())
          .then(data => {
            dispatch({
              type: TYPE.outInit,
              payload: data
            });
          })
          .catch(function(err){
            console.log(err)
        })
    };
  },
  activeInit(time){
    return function(dispatch) {
      let url=Api.activeInit+'?'+time;
      fetch(url).then(data => data.json())
          .then(data => {
            dispatch({
              type: TYPE.activeInit,
              payload: data
            });
          })
          .catch(function(err){
            console.log(err)
        })
    };
  },
  cycleInit(time){
    return function(dispatch) {
      let url=Api.cycleInit+'?'+time;
      fetch(url).then(data => data.json())
          .then(data => {
            dispatch({
              type: TYPE.cycleInit,
              payload: data
            });
          })
          .catch(function(err){
            console.log(err)
        })
    };
  },
  sellersNumInit(time){
    return function(dispatch) {
      let url=Api.sellersNumInit+'?'+time;
      fetch(url).then(data => data.json())
          .then(data => {
            dispatch({
              type: TYPE.sellersNumInit,
              payload: data
            });
          })
          .catch(function(err){
            console.log(err)
        })
    };
  },
  sellersListInit(){
    return function(dispatch) {
      let url=Api.sellersListInit;
      fetch(url).then(data => data.json())
          .then(data => {
            dispatch({
              type: TYPE.sellersListInit,
              payload: data
            });
          })
          .catch(function(err){
            console.log(err)
        })
    };
  },
  sellersInInit(time){
    return function(dispatch) {
      let url=Api.sellersInInit+'?'+time;
      fetch(url).then(data => data.json())
          .then(data => {
            dispatch({
              type: TYPE.sellersInInit,
              payload: data
            });
          })
          .catch(function(err){
            console.log(err)
        })
    };
  },
  sellersOldOrNewInit(time){
    return function(dispatch) {
      let url=Api.sellersOldOrNewInit+'?'+time;
      fetch(url).then(data => data.json())
          .then(data => {
            dispatch({
              type: TYPE.sellersOldOrNewInit,
              payload: data
            });
          })
          .catch(function(err){
            console.log(err)
        })
    };
  },
  sellersOutInit(time){
    return function(dispatch) {
      let url=Api.sellersOutInit+'?'+time;
      fetch(url).then(data => data.json())
          .then(data => {
            dispatch({
              type: TYPE.sellersOutInit,
              payload: data
            });
          })
          .catch(function(err){
            console.log(err)
        })
    };
  },
  sellersDeepInit(time){
    return function(dispatch) {
      let url=Api.sellersDeepInit+'?'+time;
      fetch(url).then(data => data.json())
          .then(data => {
            dispatch({
              type: TYPE.sellersDeepInit,
              payload: data
            });
          })
          .catch(function(err){
            console.log(err)
        })
    };
  },
  sellersStayInit(time){
    return function(dispatch) {
      let url=Api.sellersStayInit+'?'+time;
      fetch(url).then(data => data.json())
          .then(data => {
            dispatch({
              type: TYPE.sellersStayInit,
              payload: data
            });
          })
          .catch(function(err){
            console.log(err)
        })
    };
  },
  sellersActiveInit(time){
    return function(dispatch) {
      let url=Api.sellersActiveInit+'?'+time;
      fetch(url).then(data => data.json())
          .then(data => {
            dispatch({
              type: TYPE.sellersActiveInit,
              payload: data
            });
          })
          .catch(function(err){
            console.log(err)
        })
    };
  },
  sellersTimeSectionInit(time){
    return function(dispatch) {
      let url=Api.sellersTimeSectionInit+'?'+time;
      fetch(url).then(data => data.json())
          .then(data => {
            dispatch({
              type: TYPE.sellersTimeSectionInit,
              payload: data
            });
          })
          .catch(function(err){
            console.log(err)
        })
    };
  },
  sellersCycleInit(time){
    return function(dispatch) {
      let url=Api.sellersCycleInit+'?'+time;
      fetch(url).then(data => data.json())
          .then(data => {
            dispatch({
              type: TYPE.sellersCycleInit,
              payload: data
            });
          })
          .catch(function(err){
            console.log(err)
        })
    };
  },
  
}
