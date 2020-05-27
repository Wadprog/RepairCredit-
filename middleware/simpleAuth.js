const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
	const token = req.header('x-auth-token');
	if (!token) return res.status(401).json({ msg: 'No Token No access' });
	console.log(' There is  token  ');
	console.log(JSON.stringify(token));
	try {
		const decoded = jwt.verify(token, config.get('jwtSecret'));
		console.log(decoded);
		req.user = decoded.user;
		next();
	} catch (error) {
		res.status(401).json({ msg: 'Access Denied Error with server' + error });
	}
};
