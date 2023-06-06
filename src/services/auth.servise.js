import Cookies from 'js-cookie'

import { $axios } from '../api'

class AuthService {
	async main(type) {
		try {
			const { data } = await $axios.post(`/users/${type}`)
			if (data.token) Cookies.set('red', data.token)

			return data
		} catch (error) {}
	}
}

export default new AuthService()
