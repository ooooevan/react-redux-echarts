
import dispatchType from '../constants/dispatchType';
const TYPE=dispatchType.firstPage;
import Immutable from 'immutable';
const initialState = Immutable.Map({})

export default function lineReducer(state=initialState,action){
	switch(action.type){
		case '' :
		
			return;


    default:return state;
  }
}