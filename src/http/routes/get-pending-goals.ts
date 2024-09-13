import { z } from 'zod'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getWeekPendingGoals } from '../../functions/get-week-pending-goals'

export const getPendingGoalsRoute: FastifyPluginAsyncZod = async app => {
	app.get('/pending-goals', async (req, res) => {
		const { pendingGoals } = await getWeekPendingGoals()

		return { pendingGoals }
	})
}
