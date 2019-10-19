import Manager from '../models/Manager';

class ManagerController {

	async index(req, res) {
		const id = req.params.id;

		const manager = await Manager.findOne({
			where: { id }
		});

		if (!manager) {
			return res.status(404).json({
				error: "Manager not found!"
			})
		} else {
			return res.json(manager);
		}

	}

}

export default new ManagerController();
