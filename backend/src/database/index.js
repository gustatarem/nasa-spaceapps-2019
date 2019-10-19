import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../app/models/User';
import Manager from '../app/models/Manager';
import Cause from '../app/models/Cause';
import Demand from '../app/models/Demand';

const models = [User, Manager, Cause, Demand];

class Database {
	constructor() {
		this.init();
	}

	init() {
		this.connection = new Sequelize(databaseConfig);

		models.map(model => model.init(this.connection));
		models.map(model => model.associate && model.associate(this.connection.models));
	}

}

export default new Database();
