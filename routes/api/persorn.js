const express = require(`express`);
const router = express.Router();
const Persorns = require('../../models/persorn');
const Clients = require('../../models/client');
let ObjectId = require('mongodb').ObjectID;

// get every one affiliate or employee
router.get(`/person/:id`, async (req, res) => {
	try {
		let persorns = await Persorns.findById(req.params.id);
		return res.json(persorns);
	} catch (error) {
		console.log(`Error ${error}`);
		res.json({
			msg: `The server is crash thus we can't fecth data of the ${req.params.levelAccess === 'employee'
				? 'employee'
				: 'afilliate'}' list ${error}`
		});
	}
});

// get every every affiliate or employee
router.get(`/cowrokers`, async (req, res) => {
	try {
		let persorns = await Persorns.find({ levelAccess: !'Cient' });
		return res.json(persorns);
	} catch (error) {
		console.log(`Error ${error}`);
		res.json({
			msg: `The server is crash thus we can't fecth data of the ${req.params.levelAccess === 'employee'
				? 'employee'
				: 'afilliate'}' list ${error}`
		});
	}
});

// get every employees or afiliates
router.get(`/persorns/:levelaccess`, async (req, res) => {
	try {
		let persorns = await Persorns.find({ levelAccess: req.params.levelAccess });
		return res.json(persorns);
	} catch (error) {
		console.log(`Error ${error}`);
		res.json({
			msg: `The server is crash thus we can't fecth the ${req.params.levelAccess === 'employee'
				? 'employees'
				: 'afilliates'}' list ${error}`
		});
	}
});

router.get(`/:id`, async (req, res) => {
	try {
		const persorns = await Persorns.findById(req.params.id);
		return res.json(persorns);
	} catch (error) {
		console.log(`Error ${error}`);
		res.json({
			msg: `The server is crash thus we can't fecth the data of the persorn ${error}`
		});
	}
});

//get one client
router.get(`/:id`, async (req, res) => {
	try {
		Persorns.aggregate([
			{
				$match: {
					_id: ObjectId(req.params.id)
				}
			},
			{
				$lookup: {
					from: 'clients',
					localField: '_id',
					foreignField: 'persorn',
					as: 'Clients'
				}
			},
			{
				$unwind: '$Clients'
			}
		])
			.exec()
			.then(response => {
				return res.json(response);
			})
			.catch(err => {
				console.error(err);
			});
	} catch (error) {
		console.log(`Error ${error}`);
		res.json({
			msg: `The server is crash thus we can't fecth the clients' list ${error}`
		});
	}
});

// get every clients
router.get(`/clients/:levelaccess`, async (req, res) => {
	try {
		Persorns.aggregate([
			{
				$match: {
					levelAccess: req.params.levelAccess
				}
			},
			{
				$lookup: {
					from: 'clients',
					localField: '_id',
					foreignField: 'persorn',
					as: 'Clients'
				}
			},
			{
				$unwind: '$Clients'
			}
		])
			.exec()
			.then(response => {
				return res.json(response);
			})
			.catch(err => {
				console.error(err);
			});
	} catch (error) {
		console.log(`Error ${error}`);
		res.json({
			msg: `The server is crash thus we can't fecth the clients' list ${error}`
		});
	}
});

router.post(`/`, async (req, res) => {
	try {
		const {
			firstname,
			lastname,
			dob,
			email,
			levelAccess,
			username,
			password,
			phones,
			address,
			levelAccess,
			referredBy,
			assignedTo,
			clientData,
			monitoringService
		} = req.body;

		let persorn = await Persorns.findOne({ email: email });
		if (persorn) return res.status(409).json({ msg: `This Email is already exist ${email}..` });

		persorn = new Persorns({
			firstname,
			lastname,
			dob,
			email,
			levelAccess,
			username,
			password
		});

		persorn.addresses.push(address);
		phones.map(phone => {
			persorn.phones.push(phone);
		});

		await persorn.save();

		if (!levelAccess === 'client') return res.json(persorn);

		clientData.persorn = persorn._id;
		clientData.referredBy = referredBy;
		clientData.assignedTo = assignedTo;

		let client = new Clients(clientData);

		monitoringService.map(item => {
			client.monitoringService.add(item);
		});

		await client.save();
		return res.json({ persorn, client });
	} catch (error) {
		console.log(`Error creating new employee${error}`);
		res.json({ msg: `Error creating new employee ${error}` });
	}
});

module.exports = router;
