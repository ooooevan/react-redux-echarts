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
    allSellersLineChartInit(){
        return function(dispatch){
            fetch('http://localhost:3003/allsellers').then(data=>{
                data.json().then(data=>{
                    dispatch({
                        type:'allSellersLineChartInit',
                        payload:data.sellers
                    })
                })
            })
        }
    }

}

export default actions;