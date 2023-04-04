import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import CheckoutComponent from "./CheckoutComponent"
import { useEffect } from 'react'
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../fireBaseConfig";
const CheckoutContainer = () => {
  const { cart, clearCart, getPrecioTotal, isCheckoutActive } = useContext(CartContext)

  const [checkoutInfo, setCheckoutInfo] = useState({})
  const [orderId, setOrderId] = useState(null)
  const [ordenPreparada, setOrdenPreparada] = useState(false)

  const totalPrice = getPrecioTotal()

  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      telefono: "",
      correo: "",
      correo2: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .min(5, 'Debe tener más de 3 caracteres')
        .max(15, 'Debe tener menos de 15 caracteres')
        .required('Requerido'),
        apellido: Yup.string()
        .min(3, 'Debe tener más de 5 caracteres')
        .max(15, 'Debe tener menos de 15 caracteres')
        .required('Requerido'),
      telefono: Yup.string()
        
        .required('Requerido'),
      correo: Yup.string().email('Debe ingresar un email válido').required('Requerido'),
      correo2: Yup.string().email('Debe ingresar un email válido').required('Requerido').oneOf([Yup.ref('correo2'), null], 'Los correos no son iguales'),
    }),
    onSubmit: (values) => {
      
      setCheckoutInfo({ 
        items: {...cart}, 
        comprador: {
          nombre: values.nombre,
          apellido: values.apellido,
          telefono: values.telefono,
          correo: values.correo
        }
      });
      setOrdenPreparada(true);
    }
  })

  useEffect(() => {
    if (ordenPreparada) {
      let orderCollection = collection(db, "orders");
      addDoc(orderCollection, checkoutInfo)
        .then((res) => {
          setOrderId(res.id);
          clearCart();
        })
        .catch((err) => console.log(err));
    }
  }, [ordenPreparada])

  const props = {
    formik,
    cart,
    totalPrice,
    orderId
  }
  return (
    <>
      {isCheckoutActive ?
        <CheckoutComponent {...props} />
        :
        <div>Nada que mostrar</div>
      }
    </>
  )
}

export default CheckoutContainer