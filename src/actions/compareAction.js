import actionApi from '../constants/actionApi';
import dispatchType from '../constants/dispatchType';
const Api=actionApi.compare;
const TYPE=dispatchType.compare;

export default {
	numInit(time,range) {
    return function(dispatch) {
      let url=Api.numInit+time+'/'+range+'/';
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
  numInInit(time,range) {
    return function(dispatch) {
      let url=Api.numInInit+time+'/'+range+'/';
      fetch(url).then(data => data.json())
          .then(data => {
            dispatch({
              type: TYPE.numInInit,
              payload: data
            });
          })
          .catch(function(err){
            console.log(err)
        })
    };
  },
  numAvgInit(time,range) {
    return function(dispatch) {
      let url=Api.numAvgInit+time+'/'+range+'/';
      fetch(url).then(data => data.json())
          .then(data => {
            dispatch({
              type: TYPE.numAvgInit,
              payload: data
            });
          })
          .catch(function(err){
            console.log(err)
        })
    };
  },
  oldOrNewInit(time,range){
    return function(dispatch) {
      let url=Api.oldOrNewInit+time+'/'+range+'/';
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
  deepVisitInit(time,range){
    return function(dispatch) {
      let url=Api.deepVisitInit+time+'/'+range+'/';
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
  outInit(time,range){
    return function(dispatch) {
      let url=Api.outInit+time+'/'+range+'/';
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
  activeInit(time,range){
    return function(dispatch) {
      let url=Api.activeInit+time+'/'+range+'/';
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
  cycleInit(time,range){
    return function(dispatch) {
      let url=Api.cycleInit+time+'/'+range+'/';
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
  stayInit(time,range){
    return function(dispatch) {
      let url=Api.stayInit+time+'/'+range+'/';
      fetch(url).then(data => data.json())
          .then(data => {
            dispatch({
              type: TYPE.stayInit,
              payload: data
            });
          })
          .catch(function(err){
            console.log(err)
        })
    };
  },
  sellersAvgInit(sellersAndTime){
    return function(dispatch) {
      let url=Api.sellersAvgInit+sellersAndTime+'/';
      fetch(url).then(data => data.json())
          .then(data => {
            dispatch({
              type: TYPE.sellersAvgInit,
              payload: data
            });
          })
          .catch(function(err){
            console.log(err)
        })
    };
  },
  sellersNumInit(sellersAndTime){
    return function(dispatch) {
      let url=Api.sellersNumInit+sellersAndTime+'/';
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
      let url=Api.sellersListInit+'/';
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
  sellersInInit(sellersAndTime){
    return function(dispatch) {
      let url=Api.sellersInInit+sellersAndTime+'/';
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
  sellersOldOrNewInit(sellersAndTime){
    return function(dispatch) {
      let url=Api.sellersOldOrNewInit+sellersAndTime+'/';
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
  sellersOutInit(sellersAndTime){
    return function(dispatch) {
      let url=Api.sellersOutInit+sellersAndTime+'/';
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
  sellersDeepInit(sellersAndTime){
    return function(dispatch) {
      let url=Api.sellersDeepInit+sellersAndTime+'/';
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
  sellersStayInit(sellersAndTime){
    return function(dispatch) {
      let url=Api.sellersStayInit+sellersAndTime+'/';
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
  sellersActiveInit(sellersAndTime){
    return function(dispatch) {
      let url=Api.sellersActiveInit+sellersAndTime+'/';
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
  // sellersTimeSectionInit(time){
  //   return function(dispatch) {
  //     let url=Api.sellersTimeSectionInit+'?'+time+'/';
  //     fetch(url).then(data => data.json())
  //         .then(data => {
  //           dispatch({
  //             type: TYPE.sellersTimeSectionInit,
  //             payload: data
  //           });
  //         })
  //         .catch(function(err){
  //           console.log(err)
  //       })
  //   };
  // },
  sellersCycleInit(sellersAndTime){
    return function(dispatch) {
      let url=Api.sellersCycleInit+sellersAndTime+'/';
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
