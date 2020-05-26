const mongoose = require('mongoose');
//const Status = require('../utils/consts/status');
const userSchema = mongoose.Schema({
	email: {
		type: String,
		required: true
	},

	password: {
		type: String,
		required: true
	},
	level:{type:Number},
	status: {
		type: Boolean,
		default: true
	},
	reference: {
		type: String
	}
});

module.exports = User = mongoose.model('user', userSchema);
