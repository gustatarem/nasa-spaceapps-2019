import Sequelize, { Model } from 'sequelize';

class Cause extends Model {
	static init(sequelize) {
		super.init({
			title: Sequelize.STRING,
			description: Sequelize.STRING,
		}, {
			sequelize,
		});

		return this;
	}

	static associate(models) {
		this.belongsTo(models.Manager, {
			foreignKey: "manager_id"
		});
	}

}

export default Cause;
