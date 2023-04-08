
import { useDispatch, useSelector } from 'react-redux';
import { ModalType, openModal } from './redux/slices/slice';
import { ModalComponent } from './component/ModalComponent';
import { useProduct } from './hook/useProduct';
import { Button } from 'antd';
function App() {
  const dispatch = useDispatch()
  const { products, deleteProduct, addProduct, editProduct } = useProduct()

  return (
    <div>
      <h1 style={{display:'flex',justifyContent:'center'}}>Todo list</h1>
      {products.length===0&&<h3 style={{display:'flex',justifyContent:'center'}}>The list is empty</h3>}
      {products.map((data) =>
        <div style={{ display: 'flex', justifyContent: 'center',border:'10px solid #500',borderRadius:'15px',margin:'30px 30px' }} key={data.id}>
          <h3 style={{margin:'20px 15px'}} >
            {data.name}
          </h3>
          <Button style={{margin:'15px 5px'}} onClick={() => {
            deleteProduct(data.id)
          }}>delete</Button>
          <Button style={{margin:'15px 5px'}} onClick={() => {
            dispatch(openModal({ isOpen: true, item: data, modalType: ModalType.EDIT }))
          }}>edit</Button>
        </div>
      )}
      <Button style={{border:'3px solid #500',borderRadius:'10px',margin:'30px 30px' }} onClick={() => {
        dispatch(openModal({ isOpen: true, modalType: ModalType.ADD }))
      }}>add</Button>
      <ModalComponent
        addProduct={addProduct}
        editProduct={editProduct} />
    </div>

  );
}

export default App;
