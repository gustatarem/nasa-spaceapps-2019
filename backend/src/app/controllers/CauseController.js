import Cause from '../models/Cause';

class CauseController {

	async index(req, res) {
		const id = req.params.id;

		const cause = await Cause.findOne({
			where: { id }
		});

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

}

export default new CauseController();
