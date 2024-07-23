import { Response } from '@/interface/response';
import { Task } from '@/interface/task';
import { environment } from '@/setting/environment';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const taskServiceApi = createApi({
	reducerPath: 'TaskServiceApi',
	baseQuery: fetchBaseQuery({ baseUrl: environment.apiAlbo }),
	endpoints: (builder) => ({
		findAllTask: builder.query<Task[], void>({
			query: () => `/tasks`,
			transformResponse: (response: Response<Task[]>) => response.response
		}),
		findByIdTask: builder.query<Task, string>({
			query: (id) => `tasks/${id}`,
			transformResponse: (response: Response<Task>) => response.response
		}),
		addTask: builder.mutation<Task, Task>({
			query(body) {
				return {
					url: `tasks`,
					method: 'POST',
					body
				};
			}
		}),
		updateTask: builder.mutation<
			Response<Task>,
			{ id: string; task: Partial<Task> }
		>({
			query: ({ id, task }) => ({
				url: `tasks/${id}`,
				method: 'PUT',
				body: task
			})
		}),
		deleteTask: builder.mutation<Response<any>, string>({
			query: (id) => ({
				url: `tasks/${id}`,
				method: 'DELETE'
			})
		})
	})
});

export const {
	useAddTaskMutation,
	useFindAllTaskQuery,
	useFindByIdTaskQuery,
	useUpdateTaskMutation,
	useDeleteTaskMutation
} = taskServiceApi;
