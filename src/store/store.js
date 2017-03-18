import {createStore,applyMiddleware,compose,combineReducers } from 'redux';
import lineReducer from '../reducers/lineReducer';
import sellersReducer from '../reducers/sellersReducer';
import lineOption from '../options/lineOption';
import sellersTotalOption from '../options/sellersTotalOption';

import thunk from 'redux-thunk';

import DevTool from '../components/devTool';

const logger = store=>nextDispatch=>action=>{
    // console.log('start..',action.type);
    let result = nextDispatch(action);
    // console.log('end..',action.type);
    return result;
};

//const enhancer = compose(
//	applyMiddleware(logger,thunk),
//  	DevTool.instrument()
//);
 //const store=createStore(lineReducer,lineOption,enhancer);

const reducer = combineReducers({a:lineReducer,b:sellersReducer});
const state={a:lineOption,b:sellersTotalOption};
const store=createStore(reducer,state,applyMiddleware(logger,thunk));
//const store=createStore(combineReducers({a:lineReducer}),{a:lineOption},applyMiddleware(thunk));
//const store=createStore(lineReducer,lineOption,applyMiddleware(thunk));


/*  原来的store
 const store=createStore(lineReducer,lineOption,applyMiddleware(thunk));
*/


export default store;