import {createStore, applyMiddleware } from 'redux';
import {combineReducers} from 'redux-immutable';
import Immutable from 'immutable';

import reducers from '../reducers/index';
import options from '../options/index';

import thunk from 'redux-thunk';

// import DevTool from '../components/devTool';

// const logger = store => nextDispatch => (action) => {
//     // console.log('start..',action.type);
//   const result = nextDispatch(action);
//     // console.log('end..',action.type);
//   return result;
// };

// const enhancer = compose(
//  applyMiddleware(logger,thunk),
//    DevTool.instrument()
// );
 // const store=createStore(FirstPageLineReducer,lineOption,enhancer);

const reducer = combineReducers({a: reducers.firstPage, b: reducers.sellers, c: reducers.statistics, d: reducers.compare});
const state = Immutable.fromJS({a: options.firstPage, b: options.sellers, c: options.statistics, d: options.compare});
// const state={a:FirstPageLineOption,b:sellersOption};
const store = createStore(reducer, state, applyMiddleware(/* logger, */thunk));
// const store=createStore(combineReducers({a:FirstPageLineReducer}),{a:lineOption},applyMiddleware(thunk));
// const store=createStore(FirstPageLineReducer,lineOption,applyMiddleware(thunk));


/*  原来的store
 const store=createStore(FirstPageLineReducer,lineOption,applyMiddleware(thunk));
*/


export default store;
