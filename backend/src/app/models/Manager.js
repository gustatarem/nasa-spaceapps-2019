import Sequelize, { Model } from 'sequelize';

class Manager extends Model {
	static init(sequelize) {
		super.init({
			name: Sequelize.STRING,
			phone: Sequelize.STRING,
		}, {
			sequelize,
		});
	}
}

export default Manager;
