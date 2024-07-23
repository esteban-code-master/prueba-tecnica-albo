import { Modal } from "@/interface/modal";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Modal = { id: null, open: false, action: '@type/add' }

export const modalSlice = createSlice({
    name: 'modal',
    initialState: initialState,
    reducers: {
        setModal: (state, action: PayloadAction<Partial<Modal>>) => {
			return {...state, ...action.payload}
		}
    }
})

export const { setModal } = modalSlice.actions
export default modalSlice.reducer