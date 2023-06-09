import { $axios } from '../../api'

import { WORKOUTS } from './workout.servise'

const LOG = `${WORKOUTS}/log`

// http://localhost:5000/api/auth/

class WorkoutLogService {
	async getById(id) {
		return $axios.get(`http://localhost:5000/api${LOG}/${id}`)
	}
	async create(workoutId) {
		return $axios.post(`http://localhost:5000/api${LOG}/${workoutId}`)
	}

	async complete(id) {
		return $axios.patch(`http://localhost:5000/api${LOG}/complete/${id}`)
	}
}

export default new WorkoutLogService()
