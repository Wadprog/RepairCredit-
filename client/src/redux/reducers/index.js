import { combineReducers } from 'redux';
import employee from './employee';
import phonetag from './phonetag';
import alert from './alert';
import auth from './auth';
import customer from './customer';
import partners from './partners'
import person from './person'
export default combineReducers({
	alert,
	employee,
	phonetag,
	auth,
	customer,
	partners,
	person
});
