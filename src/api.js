import axios from 'axios'
import Cookies from 'js-cookie'

import { TOKEN } from './app.constants'

const API_URL = 'http://localhost:5000/api'

export const $axios = axios.create({
	baseUrl: API_URL,
	headers: {
		'Content-type': 'application/json',
		Authorization: Cookies.get(TOKEN) ? `Bearer ${Cookies.get(TOKEN)}` : ''
	}
})
