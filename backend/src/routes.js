import { Router } from "express";
import User from './app/models/User';
import Manager from './app/models/Manager';

const routes = new Router();

routes.get('/', async (req, res) => {

	const user = await User.create({
		name: 'Luiz Matias',
		phone: '(41) 99779-0151'
	});

	const manager = await Manager.create({
		name: 'Gustavo Tatarem',
		phone: '(41) 99779-0151'
	})

	return res.json({ message: 'Hello world!' });
});

export default routes;
