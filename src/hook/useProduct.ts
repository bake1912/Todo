import { useState } from "react"
import { openModal } from "../redux/slices/slice"
import { useDispatch } from "react-redux"
import { IProduct } from "../inteface/IApp"
export const useProduct = () => {
    const [id, setId] = useState(2)
    const [products, setProducts] = useState([{ name: 'Jonh', id: 0 }, { name: 'Mike', id: 1 }])
    const dispatch = useDispatch()
    const deleteProduct = (id: number) => {
        const removeItem = products.filter(item => item.id !== id)
        setProducts(removeItem)
    }

    const editProduct = (name: string, currentProduct:IProduct) => {
        const newArray = products.map(item => {
            if (item.id === currentProduct.id) {
                return { ...item, name: name }
            }
            else {
                return item
            }
        })
        setProducts(newArray)
        dispatch(openModal({ isOpen: false }))
    }
    const addProduct = (name: string) => {
        setId(prev => prev + 1)
        const newProduct:IProduct = { name: name, id: id }
        setProducts([...products, newProduct])
        dispatch(openModal({ isOpen: false }))
    }
return {deleteProduct,editProduct,addProduct,products}
}
