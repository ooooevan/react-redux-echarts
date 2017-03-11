const actions={
    init(param){

        /*
        *   param是时间段参数，用于获取不同范围数据.可以是hour、day、week、month
        */
        return function(dispatch){
            fetch('http://localhost:3000/hour/init').then((data)=>{
                data.json().then(data=>{
                    // myChart.showLoading()   //显示遮罩
                    dispatch({
                        type:'init',
                        payload:data
                    })
                })
            })
        }
    },
    change(myChart){
        return function(dispatch){
            fetch('http://localhost:3000/hour/change').then(data=>{
                data.json().then(data=>{
                    dispatch({
                        type:'change',
                        payload:data,
                        chart:myChart
                    })
                })
            })
        }
    }
}



export default actions;