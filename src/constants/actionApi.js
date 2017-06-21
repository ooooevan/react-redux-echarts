const baseUrl = 'http://localhost:8181/oldpie/';
const rtAll = `${baseUrl}rt/all/info/`;
const rtShop = `${baseUrl}rt/shop/info/`;
const olAll = `${baseUrl}ol/all/`;
const olShop = `${baseUrl}ol/shop/`;
const myUrl = 'http://localhost:3000/';
const myUrl3 = 'http://localhost:3003';
export default {
  // firstPage:{
  //  numInit:rtAll+'init/',
  //  fetch:rtAll+'newest/',
  //  sellersInit:'http://localhost:3000/index/sellersInit'
  // },
  // sellers:{
  //  sellersListInit:baseUrl+'gen/shop/shop-name',
  //  allSellersLineChartInit:olShop+'increment/mom/',/*rtSHop+'newest'*/
  //  // allSellersTableInit:'http://localhost:3003/allsellers/allSellersTableInit',
  //  // singleSellerLineChartInit:'http://localhost:3000/hour/singleSeller/',
  //  singleSellerCustomerNumInit:rtShop+'init/',
  //  singleSellerCustomerNumFetch:rtShop+'newest/',
  //  singleSellerCustomerInInit:olShop+'increment/info/',
  //  singleSellerCustomerFlowInit:olShop+'count/info/',
  //  singleSellerCustomerAvgInit:olShop+'avg/info/',
  //  singleSellerRadar:olShop+'radar/',
  //  singleSellerStayBar:olShop+'stop-time/info/',
  //  singleSellerOldOrNew:olShop+'oldandnew/info/',
  //  singleSellerTimeSection:olShop+'avg/hour-slot/',
  //  singleSellerDeepVisit:olShop+'jump-deep/info/',
  //  // singleSellerCycleAndActive:'http://localhost:3000/hour/singleSellerCycleAndActive/',
  //  singleSellerCycleInit:olShop+'timeinterval/info/',
  //  singleSellerActiveInit:olShop+'active/info/'
  // },
  // statistics:{
  //  statisticsCustomerNumInit:olAll+'increment/info/',
  //  statisticsAvgInit:olAll+'avg/info/',
  //  statisticsPeakInit:olAll+'count/info/',
  //  statisticsDeepInit:olAll+'jump-deep/info/',
  //  statisticsOutInit:olAll+'jump-deep/info/',
  //  statisticsOldOrNewInit:olAll+'oldandnew/info/',
  //  statisticsTimeSectionInit:olAll+'avg/hour-slot/',
  //  statisticsCycleInit:olAll+'timeinterval/info/',
  //  statisticsActiveInit:olAll+'active/info/',
  //  statisticsStayInit:olAll+'stop-time/info/'
  // },
  // compare:{
  //  numInit:olAll+'count/compare/',
  //  numInInit:olAll+'increment/compare/',
  //  numAvgInit:olAll+'avg/compare/',
  //  cycleInit:olAll+'timeinterval/compare/',
  //  activeInit:olAll+'active/compare/',
  //  oldOrNewInit:olAll+'oldandnew/compare/',
  //  stayInit:olAll+'stop-time/compare/',
  //  deepVisitInit:olAll+'jump-deep/compare/',
  //  outInit:olAll+'jump-deep/compare/',
  //  sellersAvgInit:olShop+'avg/compare/',
  //  sellersNumInit:olShop+'count/compare/',
  //  sellersListInit:baseUrl+'gen/shop/shop-name',
  //  sellersInInit:olShop+'increment/compare/',
  //  sellersOldOrNewInit:olShop+'oldandnew/compare/',
  //  sellersOutInit:olShop+'jump-deep/compare/',
  //  sellersDeepInit:olShop+'jump-deep/compare/',
  //  sellersStayInit:olShop+'stop-time/compare/',
  //  sellersActiveInit:olShop+'active/compare/',
  //  // sellersTimeSectionInit:'http://localhost:3000/index/sellersTimeSectionInit',
  //  sellersCycleInit:olShop+'timeinterval/compare/'
  // }
  firstPage: {
    numInit: myUrl+'hour/init',
    fetch: myUrl+'hour/fetch',
    sellersInit: myUrl+'index/sellersInit'
  },
  sellers: {
    sellersListInit: myUrl3,
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
    sellersListInit: myUrl3,
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
