import express from 'express'
import cors from 'cors'
import routes from './routes'
import path from 'path'
class App {
	public server: express.Application
	constructor() {
		this.server = express()
		this.middlewares()
		this.routes()
	}

	middlewares() {
		this.server.use(express.json())
		this.server.use(cors())
		this.server.use(
			'/uploads',
			express.static(path.resolve(__dirname, '..', 'uploads'))
		)
	}

	routes() {
		this.server.use(routes)
	}
}

export default new App().server
