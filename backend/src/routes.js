import { Router } from "express";
import User from './app/models/User';
import Manager from './app/models/Manager';
import Cause from './app/models/Cause';
import Demand from './app/models/Demand';

import ManagerController from './app/controllers/ManagerController';
import CauseController from './app/controllers/CauseController';
import DemandController from './app/controllers/DemandController';
import UserController from './app/controllers/UserController';

const routes = new Router();


//Users
//Insert User
routes.post('/users', UserController.store);
//Get Users
routes.get('/users', UserController.show);
//Get Specific User
routes.get('/users/:id', UserController.index);

//Managers
//Insert Manager
routes.post('/managers', ManagerController.store);
//Get Managers
routes.get('/managers', ManagerController.show);
//Get Specific Manager
routes.get('/managers/:id', ManagerController.index);

//Causes
//Insert Cause
routes.post('/causes', CauseController.store);
//Get Causes
routes.get('/causes', CauseController.show);
//Get Causes
routes.get('/managers/:managerId/causes', CauseController.showByManager);
//Get Specific Cause
routes.get('/causes/:id', CauseController.index);

//Demands
//Insert Demand
routes.post('/demands', DemandController.store);
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
