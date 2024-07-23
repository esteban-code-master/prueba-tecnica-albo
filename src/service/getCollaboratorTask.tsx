import { Collaborator } from '@/interface/user';
import mockBaseQuery from '@/middleware/mockMiddleware';
import { createApi } from '@reduxjs/toolkit/query/react';

export const collaboratorTaskApi = createApi({
	reducerPath: 'collaboratorTaskApi',
	// baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
	baseQuery: mockBaseQuery,
	endpoints: (builder) => ({
		getCollaboratorByTask: builder.query<Collaborator[], string>({
			query: (taskId: string) => `collaborator/task/${taskId}`
		})
	})
});

export const { useGetCollaboratorByTaskQuery } = collaboratorTaskApi;
