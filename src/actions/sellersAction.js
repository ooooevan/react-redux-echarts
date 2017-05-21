/**
 * Created by HH on 2017/3/16.
 */
import actionApi from '../constants/actionApi';
import dispatchType from '../constants/dispatchType';
const TYPE=dispatchType.sellers;
const url=actionApi.sellers; 

const actions = {
    sellersListInit(){
        return function(dispatch){
            fetch(url.sellersListInit+'/').then(data=> data.json())
                .then(data=>{
                    dispatch({
                        type: TYPE.sellersListInit,
                        payload: data
                    })
                })
                .catch(function(err){
                    console.log(err)
                })
        }
    },
    allSellersLineChartInit(time,chartPage){
        return function(dispatch){
            let url1=url.allSellersLineChartInit+time+'/'+chartPage+'/';
            fetch(url1).then(data => data.json())
                .then(data=>{
                    dispatch({
                        type:TYPE.allSellersLineChartInit,
                        payload:data
                    })
                })
                .catch(function(err){
                    console.log(err)
            })
        }
    },
    /*allSellersTableInit(){
        return function(dispatch){
            let url1=url.allSellersTableInit;
            fetch(url1).then((data) => data.json())
            .then(data=>{
                if(data.error) return;
                    dispatch({
                        type:TYPE.allSellersTableInit,
                        payload:data
                    })
                })
            .catch(function(err){
                console.log(err)
            })

            }
    },*/
    singleSellerLineChartInit(id,param){
        return function(dispatch){
            let url1=url.singleSellerLineChartInit+id+"/"+param+'/';
            fetch(url1).then(data => data.json())
                .then(data=>{
                    dispatch({
                        type:TYPE.singleSellerLineChartInit,
                        payload:data
                    })
                 })
                .catch(function(err){
                    console.log(err)
             })
        }
    },
    singleSellerCustomerNumInit(name){
        return function(dispatch){
            let url1=url.singleSellerCustomerNumInit+name+'/';
            fetch(url1).then(data => data.json())
                .then(data=>{
                    dispatch({
                        type:TYPE.singleSellerCustomerNumInit,
                        payload:data
                    })
                 })
                .catch(function(err){
                  console.log(err)
            })
        }
    },
    // singleSellerLineChartFetch(id){
    //     let url="http://localhost:3000/hour/singleSellerFetch/"+id;
    //     return function(dispatch){
    //         fetch(url).then(data => data.json())
    //             .then(data=>{
    //                 dispatch({
    //                     type:'singleSellerLineChartFetch',
    //                     payload:data
    //                 })
    //             })
    //     }
    // },  
    singleSellerCustomerNumFetch(id){
        let url1=url.singleSellerCustomerNumFetch+id+'/';
        return function(dispatch){
            fetch(url1).then(data => data.json())
                .then(data=>{
                    dispatch({
                        type:TYPE.singleSellerCustomerNumFetch,
                        payload:data
                    })
                })
                .catch(function(err){
                    console.log(err)
                })
        }
    }, 
    singleSellerCustomerAvgInit(id,param){
        let url1=url.singleSellerCustomerAvgInit+id+"/"+param+'/';
        return function(dispatch){
            fetch(url1).then(data => data.json())
                .then(data=>{
                    dispatch({
                        type:TYPE.singleSellerCustomerAvgInit,
                        payload:data
                    })
                })
                .catch(function(err){
                     console.log(err)
            })
        }
    },
    singleSellerCustomerFlowInit(id,param){
        let url1=url.singleSellerCustomerFlowInit+id+"/"+param+'/';
        return function(dispatch){
            fetch(url1).then(data => data.json())
                .then(data=>{
                    dispatch({
                        type:TYPE.singleSellerCustomerFlowInit,
                        payload:data
                    })
                })
                .catch(function(err){
                     console.log(err)
            })
        }
    },
    singleSellerCustomerInInit(id,param){
        let url1=url.singleSellerCustomerInInit+id+"/"+param+'/';
        return function(dispatch){
            fetch(url1).then(data => data.json())
                .then(data=>{
                    dispatch({
                        type:TYPE.singleSellerCustomerInInit,
                        payload:data
                    })
                })
                .catch(function(err){
                     console.log(err)
            })
        }
    },
    singleSellerRadar(id){
        let url1=url.singleSellerRadar+id+'/';
        return function(dispatch){
            fetch(url1).then(data => data.json())
                .then(data=>{
                    dispatch({
                        type:TYPE.singleSellerRadar,
                        payload:data
                    })
                })
                .catch(function(err){
                     console.log(err)
            })
        }
    },
    singleSellerStayBar(id,param){
        let url1=url.singleSellerStayBar+id+"/"+param+'/';
        return function(dispatch){
            fetch(url1).then(data => data.json())
                .then(data=>{
                    dispatch({
                        type:TYPE.singleSellerStayBar,
                        payload:data
                    })
                })
                .catch(function(err){
                     console.log(err)
            })
        }
    },
    singleSellerOldOrNew(id,param){
        let url1=url.singleSellerOldOrNew+id+"/"+param+'/';
        return function(dispatch){
            fetch(url1).then(data => data.json())
                .then(data=>{
                    dispatch({
                        type:TYPE.singleSellerOldOrNew,
                        payload:data
                    })
                })
                .catch(function(err){
                     console.log(err)
            })
        }
    },
    singleSellerTimeSection(id,param){
        let url1=url.singleSellerTimeSection+id+"/"+param+'/';
        return function(dispatch){
            fetch(url1).then(data => data.json())
                .then(data=>{
                    dispatch({
                        type:TYPE.singleSellerTimeSection,
                        payload:data
                    })
                })
                .catch(function(err){
                    console.log(err)
            })
        }
    },
    singleSellerDeepVisit(id,param){
        let url1=url.singleSellerDeepVisit+id+"/"+param+'/';
        return function(dispatch){
            fetch(url1).then(data => data.json())
                .then(data=>{
                    dispatch({
                        type:TYPE.singleSellerDeepVisit,
                        payload:data
                    })
                })
                .catch(function(err){
                    console.log(err)
            })
        }
    },
    // singleSellerCycleAndActive(id,param){
    //     let url1=url.singleSellerCycleAndActive+id+"&"+param;
    //     return function(dispatch){
    //         fetch(url1).then(data => data.json())
    //             .then(data=>{
    //                 dispatch({
    //                     type:TYPE.singleSellerCycleAndActive,
    //                     payload:data
    //                 })
    //             })
    //             .catch(function(err){
    //                 console.log(err)
    //         })
    //     }
    // },
    singleSellerCycleInit(id,param){
        let url1=url.singleSellerCycleInit+id+"/"+param+'/';
        return function(dispatch){
            fetch(url1).then(data => data.json())
                .then(data=>{
                    dispatch({
                        type:TYPE.singleSellerCycleInit,
                        payload:data
                    })
                })
                .catch(function(err){
                    console.log(err)
            })
        }
    },
    singleSellerActiveInit(id,param){
        let url1=url.singleSellerActiveInit+id+"/"+param+'/';
        return function(dispatch){
            fetch(url1).then(data => data.json())
                .then(data=>{
                    dispatch({
                        type:TYPE.singleSellerActiveInit,
                        payload:data
                    })
                })
                .catch(function(err){
                    console.log(err)
            })
        }
    }
    

}

export default actions;