module.exports = {
	dialect: 'postgres',
	host: 'localhost',
	username: 'postgres',
	password: 'docker',
	database: 'nasa-space-apps-2019',
	define: {
		timestamps: true,
		underscored: true,
		underscoredAll: true,
	}
};
