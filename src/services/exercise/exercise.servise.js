import { $axios } from '../../api'

export const EXERCISES = '/exercises'
// http://localhost:5000/api/auth/
class ExerciseService {
	async getAll() {
		return $axios.get(`http://localhost:5000/api${EXERCISES}`)
	}
	async create(body) {
		return $axios.post(`http://localhost:5000/api${EXERCISES}`, body)
	}

	async update(id, body) {
		return $axios.put(`http://localhost:5000/api${EXERCISES}/${id}`, body)
	}

	async delete(id) {
		return $axios.delete(`http://localhost:5000/api${EXERCISES}/${id}`)
	}
}

export default new ExerciseService()
