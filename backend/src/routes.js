import { Router } from "express";
import User from './app/models/User';
import Manager from './app/models/Manager';
import Cause from './app/models/Cause';
import Demand from './app/models/Demand';

import ManagerController from './app/controllers/ManagerController';
import CauseController from './app/controllers/CauseController';
import DemandController from './app/controllers/DemandController';

const routes = new Router();


//Managers
//Get Manager
routes.get('/managers/:id', ManagerController.index);

//Causes
//Get Causes
routes.get('/causes', CauseController.show);
//Get Specific Cause
routes.get('/causes/:id', CauseController.index);

//Demands
//Get Demands based by causeId
routes.get('/causes/:causeId/demands', DemandController.show);
//Get Specific Demand
routes.get('/demands/:id', DemandController.index);
//Update Status From Specific Demand
routes.put('/demands/:id', DemandController.updateStatus);

//"Seeder"
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
