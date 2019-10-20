import Cause from '../models/Cause';

class CauseController {

	async store(req, res) {

		const { manager_id, title, description } = req.body;

		const cause = await Cause.create({
			manager_id,
			title,
			description
		});

		return res.json(cause);
	}

	async index(req, res) {
		const id = req.params.id;

		const cause = await Cause.findByPk(id);

		if (!cause) {
			return res.status(404).json({
				error: "Cause not found!"
			})
		} else {
			return res.json(cause);
		}

	}

	async show(req, res) {
		const causes = await Cause.findAll();
		return await res.json(causes);
	}

	async showByManager(req, res) {
		const causes = await Cause.findAll({
			where: {
				manager_id: req.params.managerId
			}
		});
		return await res.json(causes);
	}

}

export default new CauseController();
