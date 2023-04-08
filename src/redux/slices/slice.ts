import { createSlice } from "@reduxjs/toolkit";
import { IState } from "../../inteface/IApp";


export enum ModalType {
    ADD,
    EDIT
}
const state: IState = {
    isOpen: false,
    item: undefined,
    modalType: undefined
}
export const slice = createSlice({
    initialState: state,
    name: 'slice',
    reducers: {
        openModal(state, payload: { type: string, payload: IState }) {
            return payload.payload

        },


    }
})
export const { openModal } = slice.actions