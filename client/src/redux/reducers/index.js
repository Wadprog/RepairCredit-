import { combineReducers } from 'redux';
import employee from './employee';
import phonetag from './phonetag';
import alert from './alert';
import auth from './auth';

export default combineReducers({
	alert,
	employee,
	phonetag,
	auth,
});
