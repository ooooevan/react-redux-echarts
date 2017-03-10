const actions={
    init(myChart){

        return function(dispatch){
            fetch('http://localhost:3000/hour/init').then((data)=>{
                data.json().then(data=>{
                    // myChart.showLoading()   //显示遮罩
                    console.log('init...')
                    dispatch({
                        type:'init',
                        payload:data,
                        chart:myChart
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