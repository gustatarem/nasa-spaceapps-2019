import Demand from '../models/Demand';

class DemandController {

	async store(req, res) {

		const { title, description, status, priority, cause_id } = req.body;

		const demand = await Demand.create({
			title,
			description,
			status,
			priority,
			cause_id
		});

		return res.json(demand);
	}

	async index(req, res) {
		const id = req.params.id;

		const demand = await Demand.findByPk(id);

		if (!demand) {
			return res.status(404).json({
				error: "Demand not found!"
			})
		} else {
			return res.json(demand);
		}

	}

	async show(req, res) {
		const demands = await Demand.findAll({
			where: {
				cause_id: req.params.causeId
			}
		});
		return await res.json(demands);
	}

	async updateStatus(req, res) {
		const { id } = req.params
		const demand = await Demand.findByPk(id);

		if (!demand) {
			return res.status(404).json({ error: "Demand not found!" });
		}

		const demandUpdated = await demand.update({
			status: req.body.status
		});

		return res.json(demandUpdated);
	}

}

export default new DemandController();
