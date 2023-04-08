import { ModalType } from "../redux/slices/slice"

export interface IProduct {
    id: number,
    name: string
}
export interface IItem {
    id: number,
    name: string
}
export interface IState {
    isOpen: boolean,
    item?: IItem,
    modalType?: ModalType


}
export interface IModalProps {
    addProduct: (name: string) => void
    editProduct: (name: string, item: IProduct) => void
}