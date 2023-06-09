import { $axios } from '../../api'

import { EXERCISES } from './exercise.servise'

const LOG = `${EXERCISES}/log`

// http://localhost:5000/api/auth/
class ExerciseLogService {
	async getById(id) {
		return $axios.put(`http://localhost:5000/api${LOG}/${id}`)
	}
	async create(exerciseId) {
		return $axios.post(`http://localhost:5000/api${LOG}/${exerciseId}`)
	}

	async updateTime(timeId, body) {
		return $axios.put(`http://localhost:5000/api${LOG}/time/${timeId}`, body)
	}

	async complete(id, body) {
		return $axios.patch(`http://localhost:5000/api${LOG}/complete/${id}`, body)
	}
}

export default new ExerciseLogService()
