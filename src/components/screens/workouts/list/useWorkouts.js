import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import WorkoutLogServise from '../../../../services/workout/workout-log.servise'
import WorkoutServise from '../../../../services/workout/workout.servise'

export const useWorkouts = () => {
	const navigate = useNavigate()

	const { data, isSuccess } = useQuery(
		['get workouts'],
		() => WorkoutServise.getAll(),
		{
			select: ({ data }) => data
		}
	)

	const {
		mutate,
		isLoading,
		isSuccess: isSuccessMutate,
		error
	} = useMutation(
		['Create new workout log'],
		workoutId => WorkoutLogServise.create(workoutId),
		{
			onSuccess({ data }) {
				navigate(`/workout/${data.id}`)
			}
		}
	)
	return {
		data,
		isSuccess,
		mutate,
		isLoading,
		isSuccessMutate,
		error
	}
}
