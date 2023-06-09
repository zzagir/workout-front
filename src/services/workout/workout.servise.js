import { $axios } from '../../api'

export const WORKOUTS = '/workouts'

// http://localhost:5000/api/auth/
class WorkoutService {
	async getAll() {
		return $axios.get(`http://localhost:5000/api${WORKOUTS}`)
	}

	async getByAll(id) {
		return $axios.put(`http://localhost:5000/api${WORKOUTS}/${id}`)
	}

	async create(body) {
		return $axios.post(`http://localhost:5000/api${WORKOUTS}`, body)
	}

	async update(id, body) {
		return $axios.put(`http://localhost:5000/api${WORKOUTS}/${id}`, body)
	}

	async delete(id) {
		return $axios.delete(`http://localhost:5000/api${WORKOUTS}/${id}`)
	}
}

export default new WorkoutService()
