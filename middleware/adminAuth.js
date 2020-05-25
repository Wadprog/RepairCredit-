const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../../models/user');

module.exports = function(req, res, next) {
	//get the toke from the header
	const token = req.header('x-auth-token');
	if (!token) return res.status(401).json({ msg: 'Access denied' });

	try {
		const decoded = jwt.verify(token, config.get('jwtSecret'));
		//let get that user and see if it is an admin
  const user = decoded.user;
  

		next();
	} catch (error) {
		res.status(401).json({ msg: 'Accesso denegado' });
	}
};
