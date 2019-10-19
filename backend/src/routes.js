import { Router } from "express";
import User from './app/models/User';
import Manager from './app/models/Manager';
import Cause from './app/models/Cause';
import Demand from './app/models/Demand';

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

	const cause = await Cause.create({
		title: "Teste",
		description: "Teste de descrição",
		manager_id: manager.id,
	})

	const demand = await Demand.create({
		cause_id: cause.id,
		title: "Demanda teste",
		description: "Essa é uma demanda de testes",
		status: 1,
		priority: 1,
	});

	return res.json({ message: 'Hello world!' });
});

export default routes;
