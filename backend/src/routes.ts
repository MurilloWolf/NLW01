import { Router } from 'express'
import PointsControler from './controllers/PointsController'
import ItemsControler from './controllers/ItemsController'

const routes = Router()

routes.post('/points', PointsControler.create)
routes.get('/points/:id', PointsControler.show)
routes.get('/points', PointsControler.index)

routes.get('/items', ItemsControler.index)
export default routes
