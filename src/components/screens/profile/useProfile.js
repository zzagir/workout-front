import { useQuery } from '@tanstack/react-query'

import userServise from '../../../services/user.servise'

export const useProfile = () => {
	return useQuery(['get profile'], () => userServise.getProfile(), {
		select: ({ data }) => data
	})
}
