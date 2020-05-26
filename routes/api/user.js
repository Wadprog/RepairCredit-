const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const { check, validationResult } = require('express-validator');
//The model
const User = require('../../models/user');
/*----------------------------------------------------------
                         Routes||||||||||||||||||||||||||
------------------------------------------------------------*/

//@routes get all Users api/user/
//@desc Get all user
//@desc access public will be protected

router.get('/', async (req, res) => {
	try {
		let users = await User.find();
		return res.json(users);
	} catch (error) {
		return res.status(500).json({ msg: 'Could not find ay user', error });
	}
});

//@routes post api/user/
//@desc create new user
//@desc access public will be protected
router.post('/', async (req, res) => {
	const { email, password, level, reference } = req.body;
	try {
		if (!level) return res.status(400).json({ errors: [ { msg: 'Specify user access' } ] });
		if (!reference) return res.status(400).json({ errors: [ { msg: 'Specify user reference' } ] });

		let user = await User.findOne({ email });
		if (user) return res.status(400).json({ errors: [ { msg: 'This email is taken' } ] });

		user = await User.findOne({ reference });
		if (user) return res.status(400).json({ errors: [ { msg: 'A User axist for this Perseon' } ] });

		//If user does not exist let create one
		user = new User(req.body);

		//Hashing the password.
		const salt = await bcrypt.genSalt(10);
		user.password = await bcrypt.hash(password, salt);
		//Saving the user in the database
		await user.save();
		// Creating the payload
		const payload = {
			user: {
				id: user.id
			}
		};
		//Using the payload a returning the token
		jwt.sign(
			payload,
			config.get('jwtSecret'),
			{
				expiresIn: 360000
			},
			(err, token) => {
				if (err) return res.status(500).json({ errors: [ { msg: 'Error al crear token ${err}' } ] });
				return res.json({ token });
			}
		);
	} catch (error) {
		console.log('Server error' + error);
		return res.status(500).json({ errors: [ { msg: error.message } ] });
	}
});

module.exports = router;
