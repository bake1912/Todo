
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, Modal } from 'antd';
import { FormikValues, useFormik } from 'formik';
import * as Yup from 'yup'
import { RootState } from '../redux/store';
import { ModalType, openModal } from '../redux/slices/slice';
import { IModalProps } from '../inteface/IApp';
import './Modal.scss';

export const ModalComponent = ({addProduct,editProduct}:IModalProps) => {
    const isOpen=useSelector((store:RootState)=>store.data.isOpen)
    const item = useSelector((store: RootState) => store.data.item)
    const modalType = useSelector((store: RootState) => store.data.modalType)
    const dispatch=useDispatch()
    const schema = Yup.object({
        name: Yup.string().required()
      })
      const onSubmit = (values: FormikValues) => {
        switch (modalType) {
          case ModalType.ADD:
            addProduct(values.name)
            break;
          case ModalType.EDIT:
           
          
    
        }
    
      }
      const initialValues = modalType === ModalType.ADD ? {
        name: ''
      } :
        {
          name: item?.name
        }
      const formik = useFormik({
        initialValues: initialValues,
        enableReinitialize: true,
        validationSchema: schema,
        onSubmit: onSubmit,
      })
    return (
        <div>

            <Modal
                okButtonProps={{ htmlType: 'submit', }}
                footer={null}
                open={isOpen}
                onCancel={() => dispatch((openModal({ isOpen: false })))}
            >
                <form onSubmit={formik.handleSubmit}>
                    <Input style={{width:'300px'}} name='name' value={formik.values.name}
                        onChange={formik.handleChange}
                        placeholder='name'></Input>
                    {formik.errors.name && <h2 style={{width:'300px'}} className='error'> {formik.errors.name}</h2>}
                    <Button htmlType="submit" >Submit </Button>
                </form>

            </Modal>
        </div>
    )
}