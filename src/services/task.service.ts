import { ITaskResponse, TypeTaskFromState } from '@/types/task.types'

import { axiosWithAuth } from '@/api/interceptors'

class TaskService {
	private BASE_URL = '/user/tasks'

	async getTasks() {
		const response = await axiosWithAuth.get<ITaskResponse[]>(this.BASE_URL)
		return response
	}

	async createTask(data: TypeTaskFromState) {
		const response = await axiosWithAuth.post(this.BASE_URL, data)
		return response
	}
}

export const taskService = new TaskService()
