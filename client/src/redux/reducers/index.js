import { combineReducers } from 'redux';
import employee from './employee';
import phonetag from './phonetag';
import alert from './alert';

export default combineReducers({
	alert,
	employee,
	phonetag,
});
