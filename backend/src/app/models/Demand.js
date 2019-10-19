import Sequelize, { Model } from 'sequelize';

class Demand extends Model {
	static init(sequelize) {
		super.init({
			title: Sequelize.STRING,
			description: Sequelize.STRING,
			status: Sequelize.INTEGER,
			priority: Sequelize.INTEGER
		}, {
			sequelize,
		});

		return this;
	}

	static associate(models) {
		this.belongsTo(models.Cause, {
			foreignKey: "cause_id"
		});
	}

}

export default Demand;
