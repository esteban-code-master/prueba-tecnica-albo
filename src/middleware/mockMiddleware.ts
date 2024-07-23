
import { BaseQueryFn } from '@reduxjs/toolkit/query/react';

const mockBaseQuery: BaseQueryFn<any, unknown, unknown> = async ({ url }: { url: string}) => {
	
	return {
		data: [
			{
				"_id": "a1b2c3d4e5f6g7h8i9j0",
				"name": "John Doe",
				"email": "john.doe@example.com"
			},
			{
				"_id": "b1c2d3e4f5g6h7i8j9k0",
				"name": "Jane Smith",
				"email": "jane.smith@example.com"
			},
			{
				"_id": "c1d2e3f4g5h6i7j8k9l0",
				"name": "Michael Johnson",
				"email": "michael.johnson@example.com"
			},
			{
				"_id": "d1e2f3g4h5i6j7k8l9m0",
				"name": "Emily Davis",
				"email": "emily.davis@example.com"
			},
			{
				"_id": "e1f2g3h4i5j6k7l8m9n0",
				"name": "David Wilson",
				"email": "david.wilson@example.com"
			}
		]
		
	};
};

export default mockBaseQuery;


	