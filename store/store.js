
// import   redux from 'redux';
import {createStore,applyMiddleware,compose} from 'redux'
import lineReducer from '../reducers/lineReducer';
import lineOption from '../options/lineOption';
import thunk from 'redux-thunk';


import DevTool from '../components/devTool';

const enhancer = compose(
	applyMiddleware(thunk),
  	DevTool.instrument()
);
 const store=createStore(lineReducer,lineOption,enhancer);



/*  原来的store
 const store=createStore(lineReducer,lineOption,applyMiddleware(thunk));
*/


export default store;