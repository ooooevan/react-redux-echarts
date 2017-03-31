const actions = {
  init(myChart, param) {

    /*
     *   param是时间段参数，用于获取不同范围数据.可以是hour、day、week、month
     */
    return function(dispatch) {
      fetch('http://localhost:3000/hour/init').then((data) => data.json())
        .then(data => {
          dispatch({
            type: 'init',
            payload: data,
            chart: myChart
          });
      });
    };
  }
  /*,
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
      }*/
}



export default actions;