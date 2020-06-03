import { Request, Response } from 'express'
import knex from '../database/connection'

class ItemsController {
	async index(req: Request, res: Response) {
		const items = await knex('items').select('*')
		const serializeItems = items.map((item) => {
			return {
				id: item.id,
				title: item.title,
				image_url: `http://localhost:3333/uploads/${item.image}`,
			}
		})

		return res.json(serializeItems)
	}
}

export default new ItemsController()
