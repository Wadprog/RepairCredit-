const express = require('express');
const router = express.Router();
const simpleAuth = require('../../middleware/simpleAuth');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const { check, validationResult } = require('express-validator');
const User = require('../../models/user');

/*----------------------------------------------------------
                         Routes
------------------------------------------------------------*/

//@routes get api/auth/
//@desc test route
//@desc access private
router.get('/', simpleAuth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select('-password');
		res.json(user);
	} catch (error) {
		res.status(500).send('Server error fething user from database' + error);
	}
});

//@routes get api/auth/
//@desc login route
//@desc access public
router.post(
	'/',
	[
		check('email', 'Provide email address').not().isEmpty(),
		check('password', 'Please enter a password').not().isEmpty()
	],
	async (req, res) => {
		const error = validationResult(req);
		if (!error.isEmpty()) return res.status(400).json({ errors: error.array() });
		const { email, password } = req.body;

		try {
			let user = await User.findOne({ email });
			if (!user) return res.status(404).json({ msg: 'Please review login details' });
			const isMatch = await bcrypt.compare(password, user.password);
			if (!isMatch) return res.status(401).json({ msg: 'Please review login details' });

			// If all informatiion is ok
			const payload = {
				user: {
					id: user.id,
					level: user.level
				}
			};
			jwt.sign(payload, config.get('jwtSecret'), (err, token) => {
				if (err) throw err;
				return res.json({ token });
			});
		} catch (error) {
			console.log(`Error siging in user. ${error}`);
		}
	}
);

module.exports = router;
