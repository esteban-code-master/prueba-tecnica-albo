import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ActionSlice {
	action: null  | '@delete',
	refresh: boolean
}

const initialState: ActionSlice = { action: null, refresh: false }

export const actionSlice = createSlice({
    name: 'action',
    initialState: initialState,
    reducers: {
        setAction: (state, action: PayloadAction<ActionSlice>) => {
			return {...state, ...action.payload}
		}
    }
})

export const { setAction } = actionSlice.actions
export default actionSlice.reducer