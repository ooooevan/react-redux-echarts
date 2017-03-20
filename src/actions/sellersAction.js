/**
 * Created by HH on 2017/3/16.
 */
const actions = {
    sellersInit(){
        return function(dispatch){
            fetch('http://localhost:3003').then(data=>{
                data.json().then(data=>{
                    dispatch({
                        type: 'sellersInit',
                        payload: data.sellers
                    })
                })
            })
        }
    },
    allSellersLineChartInit(chartPage){
        return function(dispatch){
            let url="http://localhost:3003/allsellers/"+chartPage
            fetch(url).then(data=>{
                data.json().then(data=>{
                    if(data.error) return;
                    dispatch({
                        type:'allSellersLineChartInit',
                        payload:data.sellers
                    })
                })
            })
        }
    },
    singleSellerLineChartInit(id,param){
        return function(dispatch){
            let url="http://localhost:3000/hour/singleSeller/"+id+"/"+param;
            fetch(url).then(data=>{
                data.json().then(data=>{
                    dispatch({
                        type:'singleSellerLineChartInit',
                        payload:data
                    })
                })
            })
        }
    },
    singleSellerLineChartFetch(id){
        let url="http://localhost:3000/hour/singleSellerFetch/"+id;
        return function(dispatch){
            fetch(url).then(data=>{
                data.json().then(data=>{
                    dispatch({
                        type:'singleSellerLineChartFetch',
                        payload:data
                    })
                })
            })
        }
    }

}

export default actions;