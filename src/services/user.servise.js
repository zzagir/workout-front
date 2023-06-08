import { $axios } from '../api'

const USERS = '/users'
// http://localhost:5000/api/auth/
class UserService {
	async getProfile() {
		return $axios.get(`http://localhost:5000/api${USERS}/profile`)
	}
}

export default new UserService()
