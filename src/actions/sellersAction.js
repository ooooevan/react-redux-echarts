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
                        payload: data.sellers
                    })
            })
        }
    },
    allSellersLineChartInit(chartPage){
        return function(dispatch){
            let url="http://localhost:3003/allsellers/"+chartPage
            fetch(url).then(data => data.json())
                .then(data=>{
                    if(data.error) return;
                    dispatch({
                        type:'allSellersLineChartInit',
                        payload:data.sellers
                    })
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
                            payload:data.sellers
                        })
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
        }
    }

}

export default actions;