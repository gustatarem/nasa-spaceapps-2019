import User from '../models/User';

class UserController {

	async store(req, res) {

		const { name, phone } = req.body;

		const user = await User.create({
			name,
			phone
		});

		return res.json(user);
	}

	async index(req, res) {
		const id = req.params.id;

		const user = await User.findByPk(id);

		if (!user) {
			return res.status(404).json({
				error: "User not found!"
			})
		} else {
			return res.json(user);
		}

	}

	async show(req, res) {
		const users = await User.findAll();
		return await res.json(users);
	}

}

export default new UserController();
