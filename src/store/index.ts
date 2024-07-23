import { collaboratorTaskApi } from '@/service/getCollaboratorTask';
import { taskServiceApi } from '@/service/taskServiceApi';
import { configureStore, Store } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import action from './slice/actions';
import modal from './slice/modal';


export const makeStore = () => {
	return configureStore({
		reducer: {
		   modal,
		   action,
		   [collaboratorTaskApi.reducerPath]: collaboratorTaskApi.reducer,
		   [taskServiceApi.reducerPath]: taskServiceApi.reducer,
		},
		middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(collaboratorTaskApi.middleware).concat(taskServiceApi.middleware),
	})
}

export const wrapper = createWrapper<Store<any>>(makeStore, {debug: true});
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']