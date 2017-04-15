/**
 * Created by HH on 2017/3/16.
 */
const actions = {
    sellersInit(){
        return function(dispatch){
            fetch('http://localhost:3003').then(data=> data.json())
                .then(data=>{
                    dispatch({
                        type: 'sellersInit',
                        payload: data
                    })
                })
                .catch(function(err){
                    console.log(err)
                })
        }
    },
    allSellersLineChartInit(chartPage){
        return function(dispatch){
            let url="http://localhost:3003/allsellers/"+chartPage
            fetch(url).then(data => data.json())
                .then(data=>{
                    dispatch({
                        type:'allSellersLineChartInit',
                        payload:data
                    })
                })
                .catch(function(err){
                    console.log(err)
            })
        }
    },
    allSellersTableInit(){
        return function(dispatch){
            let url="http://localhost:3003/allsellers/allSellersTableInit";
            fetch(url).then((data) => data.json())
            .then(data=>{
                if(data.error) return;
                    dispatch({
                        type:'allSellersTableInit',
                        payload:data
                    })
                })
            .catch(function(err){
                console.log(err)
            })

            }
    },
    singleSellerLineChartInit(id,param){
        return function(dispatch){
            let url="http://localhost:3000/hour/singleSeller/"+id+"/"+param;
            fetch(url).then(data => data.json())
                .then(data=>{
                    dispatch({
                        type:'singleSellerLineChartInit',
                        payload:data
                    })
                 })
                .catch(function(err){
                    console.log(err)
             })
        }
    },
    singleSellerCustomerNumInit(id,param){
        return function(dispatch){
            let url="http://localhost:3000/hour/singleSellerCustomerNumInit/"+id+"&"+param;
            fetch(url).then(data => data.json())
                .then(data=>{
                    dispatch({
                        type:'singleSellerCustomerNumInit',
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
        let url="http://localhost:3000/hour/singleSellerCustomerNumFetch/"+id;
        return function(dispatch){
            fetch(url).then(data => data.json())
                .then(data=>{
                    dispatch({
                        type:'singleSellerCustomerNumFetch',
                        payload:data
                    })
                })
                .catch(function(err){
                    console.log(err)
                })
        }
    }, 
    singleSellerCustomerFlowInit(id,param){
        let url="http://localhost:3000/hour/singleSellerCustomerFlowInit/"+id+"&"+param;
        return function(dispatch){
            fetch(url).then(data => data.json())
                .then(data=>{
                    dispatch({
                        type:'singleSellerCustomerFlowInit',
                        payload:data
                    })
                })
                .catch(function(err){
                     console.log(err)
            })
        }
    },
    singleSellerRadar(id,param){
        let url="http://localhost:3000/hour/singleSellerRadar/"+id+"&"+param;
        return function(dispatch){
            fetch(url).then(data => data.json())
                .then(data=>{
                    dispatch({
                        type:'singleSellerRadar',
                        payload:data
                    })
                })
                .catch(function(err){
                     console.log(err)
            })
        }
    },
    singleSellerStayBar(id,param){
        let url="http://localhost:3000/hour/singleSellerStayBar/"+id+"&"+param;
        return function(dispatch){
            fetch(url).then(data => data.json())
                .then(data=>{
                    dispatch({
                        type:'singleSellerStayBar',
                        payload:data
                    })
                })
                .catch(function(err){
                     console.log(err)
            })
        }
    },
    singleSellerOldOrNew(id,param){
        let url="http://localhost:3000/hour/singleSellerOldOrNew/"+id+"&"+param;
        return function(dispatch){
            fetch(url).then(data => data.json())
                .then(data=>{
                    dispatch({
                        type:'singleSellerOldOrNew',
                        payload:data
                    })
                })
                .catch(function(err){
                     console.log(err)
            })
        }
    },
    singleSellerTimeSection(id,param){
        let url="http://localhost:3000/hour/singleSellerTimeSection/"+id+"&"+param;
        return function(dispatch){
            fetch(url).then(data => data.json())
                .then(data=>{
                    dispatch({
                        type:'singleSellerTimeSection',
                        payload:data
                    })
                })
                .catch(function(err){
                    console.log(err)
            })
        }
    },
    singleSellerDeepVisit(id,param){
        let url="http://localhost:3000/hour/singleSellerDeepVisit/"+id+"&"+param;
        return function(dispatch){
            fetch(url).then(data => data.json())
                .then(data=>{
                    dispatch({
                        type:'singleSellerDeepVisit',
                        payload:data
                    })
                })
                .catch(function(err){
                    console.log(err)
            })
        }
    },
    singleSellerCycleAndActive(id,param){
        let url="http://localhost:3000/hour/singleSellerCycleAndActive/"+id+"&"+param;
        return function(dispatch){
            fetch(url).then(data => data.json())
                .then(data=>{
                    dispatch({
                        type:'singleSellerCycleAndActive',
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