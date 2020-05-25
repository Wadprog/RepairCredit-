const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
	//get the toke from the header
	const token = req.header('x-auth-token');
	if (!token) return res.status(401).json({ msg: 'Accesso denegado' });

	try {
		const decoded = jwt.verify(token, config.get('jwtSecret'));
		req.user = decoded.user;
		next();
	} catch (error) {
		res.status(401).json({ msg: 'Accesso denegado' });
	}
};
