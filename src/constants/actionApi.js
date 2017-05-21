const baseUrl='http://localhost:8181/oldpie/';
	let rtAll=baseUrl+'rt/all/info/';
	let rtShop=baseUrl+'rt/shop/info/';
	let olAll=baseUrl+'ol/all/';
	let olShop=baseUrl+'ol/shop/';
export default {
	// firstPage:{
	// 	numInit:rtAll+'init/',
	// 	fetch:rtAll+'newest/',
	// 	sellersInit:'http://localhost:3000/index/sellersInit'
	// },
	// sellers:{
	// 	sellersListInit:baseUrl+'gen/shop/shop-name',
	// 	allSellersLineChartInit:olShop+'increment/mom/',/*rtSHop+'newest'*/
	// 	// allSellersTableInit:'http://localhost:3003/allsellers/allSellersTableInit',
	// 	// singleSellerLineChartInit:'http://localhost:3000/hour/singleSeller/',
	// 	singleSellerCustomerNumInit:rtShop+'init/',
	// 	singleSellerCustomerNumFetch:rtShop+'newest/',
	// 	singleSellerCustomerInInit:olShop+'increment/info/',
	// 	singleSellerCustomerFlowInit:olShop+'count/info/',
	// 	singleSellerCustomerAvgInit:olShop+'avg/info/',
	// 	singleSellerRadar:olShop+'radar/',
	// 	singleSellerStayBar:olShop+'stop-time/info/',
	// 	singleSellerOldOrNew:olShop+'oldandnew/info/',
	// 	singleSellerTimeSection:olShop+'avg/hour-slot/',
	// 	singleSellerDeepVisit:olShop+'jump-deep/info/',
	// 	// singleSellerCycleAndActive:'http://localhost:3000/hour/singleSellerCycleAndActive/',
	// 	singleSellerCycleInit:olShop+'timeinterval/info/',
	// 	singleSellerActiveInit:olShop+'active/info/'
	// },
	// statistics:{
	// 	statisticsCustomerNumInit:olAll+'increment/info/',
	// 	statisticsAvgInit:olAll+'avg/info/',
	// 	statisticsPeakInit:olAll+'count/info/',
	// 	statisticsDeepInit:olAll+'jump-deep/info/',
	// 	statisticsOutInit:olAll+'jump-deep/info/',
	// 	statisticsOldOrNewInit:olAll+'oldandnew/info/',
	// 	statisticsTimeSectionInit:olAll+'avg/hour-slot/',
	// 	statisticsCycleInit:olAll+'timeinterval/info/',
	// 	statisticsActiveInit:olAll+'active/compare/',
	// 	statisticsStayInit:olAll+'stop-time/info/'
	// },
	// compare:{
	// 	numInit:olAll+'count/compare/',
	// 	numInInit:olAll+'increment/compare/',
	// 	numAvgInit:olAll+'avg/compare/',
	// 	cycleInit:olAll+'timeinterval/compare/',
	// 	activeInit:olAll+'active/compare/',
	// 	oldOrNewInit:olAll+'oldandnew/compare/',
	// 	stayInit:olAll+'stop-time/compare/',
	// 	deepVisitInit:olAll+'jump-deep/compare/',
	// 	outInit:olAll+'jump-deep/compare/',
	// 	sellersAvgInit:olShop+'avg/compare/',
	// 	sellersNumInit:olShop+'count/compare/',
	// 	sellersListInit:baseUrl+'gen/shop/shopName',
	// 	sellersInInit:olShop+'increment/compare/',
	// 	sellersOldOrNewInit:olShop+'oldandnew/compare/',
	// 	sellersOutInit:olShop+'jump-deep/compare/',
	// 	sellersDeepInit:olShop+'jump-deep/compare/',
	// 	sellersStayInit:olShop+'stop-time/compare/',
	// 	sellersActiveInit:olShop+'active/compare/',
	// 	// sellersTimeSectionInit:'http://localhost:3000/index/sellersTimeSectionInit',
	// 	sellersCycleInit:olShop+'timeinterval/compare/'
	// }
	firstPage:{
		numInit:'http://localhost:3000/hour/init',
		fetch:'http://localhost:3000/hour/fetch',
		sellersInit:'http://localhost:3000/index/sellersInit'
	},
	sellers:{
		sellersListInit:'http://localhost:3003',
		allSellersLineChartInit:'http://localhost:3000/index/allsellers/',
		// allSellersTableInit:'http://localhost:3003/allsellers/allSellersTableInit',
		singleSellerLineChartInit:'http://localhost:3000/hour/singleSeller/',
		singleSellerCustomerNumInit:'http://localhost:3000/hour/singleSellerCustomerNumInit/',
		singleSellerCustomerNumFetch:'http://localhost:3000/hour/singleSellerCustomerNumFetch/',
		singleSellerCustomerInInit:'http://localhost:3000/hour/singleSellerCustomerInInit/',
		singleSellerCustomerAvgInit:'http://localhost:3000/hour/singleSellerCustomerAvgInit/',
		singleSellerCustomerFlowInit:'http://localhost:3000/hour/singleSellerCustomerFlowInit/',
		singleSellerRadar:'http://localhost:3000/hour/singleSellerRadar/',
		singleSellerStayBar:'http://localhost:3000/hour/singleSellerStayBar/',
		singleSellerOldOrNew:'http://localhost:3000/hour/singleSellerOldOrNew/',
		singleSellerTimeSection:'http://localhost:3000/hour/singleSellerTimeSection/',
		singleSellerDeepVisit:'http://localhost:3000/hour/singleSellerDeepVisit/',
		// singleSellerCycleAndActive:'http://localhost:3000/hour/singleSellerCycleAndActive/',
		singleSellerCycleInit:'http://localhost:3000/index/singleSellerCycleInit/',
		singleSellerActiveInit:'http://localhost:3000/index/singleSellerActiveInit/'
	},
	statistics:{
		statisticsCustomerNumInit:'http://localhost:3000/index/statisticsCustomerNumInit/',
		statisticsAvgInit:'http://localhost:3000/index/statisticsAvgInit/',
		statisticsPeakInit:'http://localhost:3000/index/statisticsPeakInit/',
		statisticsDeepInit:'http://localhost:3000/index/statisticsDeepInit/',
		statisticsOutInit:'http://localhost:3000/index/statisticsDeepInit/',
		statisticsOldOrNewInit:'http://localhost:3000/hour/statisticsOldOrNewInit/',
		statisticsTimeSectionInit:'http://localhost:3000/hour/statisticsTimeSectionInit/',
		statisticsCycleInit:'http://localhost:3000/index/statisticsCycleInit/',
		statisticsActiveInit:'http://localhost:3000/index/statisticsActiveInit/',
		statisticsStayInit:'http://localhost:3000/index/statisticsStayInit/'
	},
	compare:{
		numInit:'http://localhost:3000/index/compareCustomerNum/',
		numInInit:'http://localhost:3000/index/numInInit/',
		numAvgInit:'http://localhost:3000/index/numAvgInit/',
		cycleInit:'http://localhost:3000/index/customerCycleInit/',
		activeInit:'http://localhost:3000/index/customerActiveInit/',
		oldOrNewInit:'http://localhost:3000/index/customerOldOrNewInit/',
		deepVisitInit:'http://localhost:3000/index/customerDeepVisitInit/',
		stayInit:'http://localhost:3000/index/customerStayInit/',
		outInit:'http://localhost:3000/index/customerDeepVisitInit/',
		sellersAvgInit:'http://localhost:3000/index/sellersAvgInit/',
		sellersNumInit:'http://localhost:3000/index/sellersNumInit/',
		sellersListInit:'http://localhost:3003',
		sellersInInit:'http://localhost:3000/index/sellersInInit/',
		sellersOldOrNewInit:'http://localhost:3000/index/sellersOldOrNewInit/',
		sellersOutInit:'http://localhost:3000/index/sellersDeepInit/',
		sellersDeepInit:'http://localhost:3000/index/sellersDeepInit/',
		sellersStayInit:'http://localhost:3000/index/sellersStayBarInit/',
		sellersActiveInit:'http://localhost:3000/index/sellersActiveInit/',
		// sellersTimeSectionInit:'http://localhost:3000/index/sellersTimeSectionInit',
		sellersCycleInit:'http://localhost:3000/index/sellersCycleInit/'
	}
}