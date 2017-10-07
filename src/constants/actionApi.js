const myUrl = 'http://localhost:3000/';
export default {
  firstPage: {
    numInit: myUrl+'hour/init',
    fetch: myUrl+'hour/fetch',
    sellersInit: myUrl+'index/sellersInit'
  },
  sellers: {
    sellersListInit: myUrl+'userList',
    allSellersLineChartInit: myUrl+'index/allsellers/',
    // allSellersTableInit:'http://localhost:3003/allsellers/allSellersTableInit',
    singleSellerLineChartInit: myUrl+'hour/singleSeller/',
    singleSellerCustomerNumInit: myUrl+'hour/singleSellerCustomerNumInit/',
    singleSellerCustomerNumFetch: myUrl+'hour/singleSellerCustomerNumFetch/',
    singleSellerCustomerInInit: myUrl+'hour/singleSellerCustomerInInit/',
    singleSellerCustomerAvgInit: myUrl+'hour/singleSellerCustomerAvgInit/',
    singleSellerCustomerFlowInit: myUrl+'hour/singleSellerCustomerFlowInit/',
    singleSellerRadar: myUrl+'hour/singleSellerRadar/',
    singleSellerStayBar: myUrl+'hour/singleSellerStayBar/',
    singleSellerOldOrNew: myUrl+'hour/singleSellerOldOrNew/',
    singleSellerTimeSection: myUrl+'hour/singleSellerTimeSection/',
    singleSellerDeepVisit: myUrl+'hour/singleSellerDeepVisit/',
    // singleSellerCycleAndActive:'http://localhost:3000/hour/singleSellerCycleAndActive/',
    singleSellerCycleInit: myUrl+'index/singleSellerCycleInit/',
    singleSellerActiveInit: myUrl+'index/singleSellerActiveInit/'
  },
  statistics: {
    statisticsCustomerNumInit: myUrl+'index/statisticsCustomerNumInit/',
    statisticsAvgInit: myUrl+'index/statisticsAvgInit/',
    statisticsPeakInit: myUrl+'index/statisticsPeakInit/',
    statisticsDeepInit: myUrl+'index/statisticsDeepInit/',
    statisticsOutInit: myUrl+'index/statisticsDeepInit/',
    statisticsOldOrNewInit: myUrl+'hour/statisticsOldOrNewInit/',
    statisticsTimeSectionInit: myUrl+'hour/statisticsTimeSectionInit/',
    statisticsCycleInit: myUrl+'index/statisticsCycleInit/',
    statisticsActiveInit: myUrl+'index/statisticsActiveInit/',
    statisticsStayInit: myUrl+'index/statisticsStayInit/'
  },
  compare: {
    numInit: myUrl+'index/compareCustomerNum/',
    numInInit: myUrl+'index/numInInit/',
    numAvgInit: myUrl+'index/numAvgInit/',
    cycleInit: myUrl+'index/customerCycleInit/',
    activeInit: myUrl+'index/customerActiveInit/',
    oldOrNewInit:myUrl+ 'index/customerOldOrNewInit/',
    deepVisitInit: myUrl+'index/customerDeepVisitInit/',
    stayInit:myUrl+ 'index/customerStayInit/',
    outInit: myUrl+'index/customerDeepVisitInit/',
    sellersAvgInit: myUrl+'index/sellersAvgInit/',
    sellersNumInit: myUrl+'index/sellersNumInit/',
    sellersListInit: myUrl+'userList',
    sellersInInit: myUrl+'index/sellersInInit/',
    sellersOldOrNewInit: myUrl+'index/sellersOldOrNewInit/',
    sellersOutInit:myUrl+ 'index/sellersDeepInit/',
    sellersDeepInit:myUrl+ 'index/sellersDeepInit/',
    sellersStayInit:myUrl+ 'index/sellersStayBarInit/',
    sellersActiveInit: myUrl+'index/sellersActiveInit/',
    // sellersTimeSectionInit:'http://localhost:3000/index/sellersTimeSectionInit',
    sellersCycleInit: myUrl+'index/sellersCycleInit/'
  }
};
