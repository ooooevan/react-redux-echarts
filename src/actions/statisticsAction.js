
import actionApi from '../constants/actionApi';
import dispatchType from '../constants/dispatchType';
const TYPE=dispatchType.statistics;
const url=actionApi.statistics; 

export default {
	statisticsCustomerNumInit(time){
    return function(dispatch){
    	let _url=url.statisticsCustomerNumInit+'?'+time;
      fetch(_url).then(data=> data.json())
        .then(data=>{
          dispatch({
            type: TYPE.statisticsCustomerNumInit,
            payload: data
          })
        })
        .catch(function(err){
            console.log(err)
        })
    }
  },
  statisticsOldOrNewInit(time){
    return function(dispatch){
    	let _url=url.statisticsOldOrNewInit+time+'&';
      fetch(_url).then(data=> data.json())
        .then(data=>{
          dispatch({
            type: TYPE.statisticsOldOrNewInit,
            payload: data
          })
        })
        .catch(function(err){
            console.log(err)
        })
    }
  },
  statisticsTimeSectionInit(time){
  	return function(dispatch){
    	let _url=url.statisticsTimeSectionInit+time+'&';
      fetch(_url).then(data=> data.json())
        .then(data=>{
          dispatch({
            type: TYPE.statisticsTimeSectionInit,
            payload: data
          })
        })
        .catch(function(err){
            console.log(err)
        })
    }
  },
  statisticsCycleInit(time){
  	return function(dispatch){
    	let _url=url.statisticsCycleInit+'?'+time+'&';
      fetch(_url).then(data=> data.json())
        .then(data=>{
          dispatch({
            type: TYPE.statisticsCycleInit,
            payload: data
          })
        })
        .catch(function(err){
            console.log(err)
        })
    }
  },
  statisticsActiveInit(time){
  	return function(dispatch){
    	let _url=url.statisticsActiveInit+'?'+time+'&';
      fetch(_url).then(data=> data.json())
        .then(data=>{
          dispatch({
            type: TYPE.statisticsActiveInit,
            payload: data
          })
        })
        .catch(function(err){
            console.log(err)
        })
    }
  },
}






