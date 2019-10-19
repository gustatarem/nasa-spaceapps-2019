const express = require('express')
const SessionController = require('./controller/SessionController')
const SpotController = require('./controller/SpotController')
const ProfileController = require('./controller/ProfileController')
const BookingController = require('./controller/BookingController')

const routes = express.Router()

routes.post('/sessions', SessionController.store )
routes.post('/spots', SpotController.store )
routes.get('/index', SpotController.index )
routes.get('/dashboard', ProfileController.show )
routes.post('/spots/:id/bookings', BookingController.store)

module.exports = routes