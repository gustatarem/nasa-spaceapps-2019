import Manager from '../models/Manager';

class ManagerController {

	async store(req, res) {

		const { name, phone } = req.body;

		const manager = await Manager.create({
			name,
			phone
		});

		return res.json(manager);
	}

	async index(req, res) {
		const id = req.params.id;

		const manager = await Manager.findByPk(id);

		if (!manager) {
			return res.status(404).json({
				error: "Manager not found!"
			})
		} else {
			return res.json(manager);
		}

	}

	async show(req, res) {
		const managers = await Manager.findAll();
		return await res.json(managers);
	}

}

export default new ManagerController();
