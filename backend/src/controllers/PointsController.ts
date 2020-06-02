import knex from '../database/connection'
import { Request, Response } from 'express'

class PointsController {
	async index(req: Request, res: Response) {
		const { city, uf, items } = req.query

		const parsedItems = String(items)
			.split(',')
			.map((item) => Number(item.trim()))

		const points = await knex('points')
			.join('point_item', 'point_id', '=', 'point_item.point_id')
			.whereIn('point_items.item_id', parsedItems)
			.where('city', String(city))
			.where('uf', String(uf))
			.distinct()
			.select('points.*')

		return res.json(points)
	}

	async show(req: Request, res: Response) {
		const { id } = req.params
		const point = await knex('points').where('id', id).first()
		if (!point)
			return res.status(404).json({ message: 'Ponto não encontrado ' })

		const items = await knex('items')
			.join('point_item', 'items_id', '=', 'point_item.item_id')
			.where('point_item.point_id', id)
			.select('items.title')
		return res.json({ point, items })
	}

	async create(req: Request, res: Response) {
		const {
			name,
			email,
			whatsapp,
			latitude,
			longitude,
			uf,
			city,
			items,
		} = req.body

		const point = {
			image: 'image-fake',
			name,
			email,
			whatsapp,
			latitude,
			longitude,
			uf,
			city,
			items,
		}
		const trx = await knex.transaction()
		const insertedIds = await trx('points').insert(point)
		const point_id = insertedIds[0]

		const pointItem = items.map((item_id: number) => {
			return { item_id, point_id }
		})
		await trx('point_item').insert(pointItem)
		await trx.commit()

		return res.json({ id: point_id, ...point })
	}
}

export default new PointsController()
