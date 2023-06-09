import { useQuery } from '@tanstack/react-query'

import ExerciseServise from '../../../services/exercise/exercise.servise'

export const useListExercises = () =>
	useQuery(['list exercises'], () => ExerciseServise.getAll(), {
		select: ({ data }) => data
	})
