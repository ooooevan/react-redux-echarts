import {createStore,applyMiddleware,compose } from 'redux';
import {combineReducers} from 'redux-immutable';
import Immutable from 'immutable';
import FirstPageLineReducer from '../reducers/firstPageLineReducer';
import sellersReducer from '../reducers/sellersReducer';

import FirstPageLineOption from '../options/firstPageLineOption';
import sellersOption from '../options/sellersOption';

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
 //const store=createStore(FirstPageLineReducer,lineOption,enhancer);

const reducer = combineReducers({a:FirstPageLineReducer,b:sellersReducer});
const state=Immutable.fromJS({a:FirstPageLineOption,b:sellersOption});
// const state={a:FirstPageLineOption,b:sellersOption};
const store=createStore(reducer,state,applyMiddleware(logger,thunk));
//const store=createStore(combineReducers({a:FirstPageLineReducer}),{a:lineOption},applyMiddleware(thunk));
//const store=createStore(FirstPageLineReducer,lineOption,applyMiddleware(thunk));


/*  原来的store
 const store=createStore(FirstPageLineReducer,lineOption,applyMiddleware(thunk));
*/


export default store;