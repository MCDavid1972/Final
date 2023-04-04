
import { useParams } from "react-router-dom"
import style from "./ItemDetailContainer.module.css"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"
import { useContext, useEffect, useState} from "react"
import Swal from 'sweetalert2'
import { db } from "../../fireBaseConfig";
import {getDoc, collection, doc} from "firebase/firestore"

const ItemDetailContainer = () => {
    const {id} = useParams()

    const {agregarAlCarrito, getQuantityById} = useContext (CartContext)

    const [productSelected, setProductSelected] = useState({})
    useEffect(()=>{
      const itemsCollection = collection(db,"products")
      const ref = doc(itemsCollection, id)
      getDoc(ref)
      .then(res => {
        setProductSelected({
          ...res.data(),
          id: res.id
        })
      })
    },[id])

    const onAdd =(cantidad)=>{
      const producto = { 
        ...productSelected,
        quantity: cantidad
      }

       agregarAlCarrito(producto)
       Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto agregado',
        showConfirmButton: false,
        timer: 1500
      })
    }
    
    let quantity = getQuantityById(Number(id))
    
  return (
    <div className={style.container}>
  <h1 className={style.nombre}>{productSelected.nombre}</h1>
  <img className={style.img} src={productSelected.img} alt="" />
  <div className={style.descripcion}>
    <p>{productSelected.descripcion}</p>
  </div>
  <h2 className={style.precio}>${productSelected.precio}</h2>
  <ItemCount onAdd={onAdd} stock={productSelected.stock} initial={quantity} />
</div>
  )
}

export default ItemDetailContainer