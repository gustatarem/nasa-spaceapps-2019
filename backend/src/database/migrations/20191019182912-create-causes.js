'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('causes', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			manager_id: {
				type: Sequelize.INTEGER,
				references: {
					model: 'managers',
					key: 'id',
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
				allowNull: false,
			},
			title: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			description: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			}
		});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('causes');
	}
};
