import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import Swal from 'sweetalert2'

import CartComponent from "./CartComponent";
const Cart = () => {
  const { cart, clearCart, getPrecioTotal, deleteProductById, showCheckout } =
    useContext(CartContext);

  const precioTotal = getPrecioTotal();
  
  const clear  = ()=>{
    Swal.fire({
      title: "Seguro que Quieres Borrar el Carrito",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si Limpiar',
      denyButtonText: `No limpiar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Carrito Limpiado', '', 'success')
        clearCart()
      } else if (result.isDenied) {
        Swal.fire('No se limpio el carrito', '', 'error')
      }
    }) 
  }

  const shouldShowCheckout = () => {
    if (cart.length > 0) {
      showCheckout();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No hay productos en el carrito",
      });
    }
  };
  
  const props={
    deleteProductById,
    cart,
    precioTotal,
    clear,
    shouldShowCheckout
  }
  return (
    <div>
      <CartComponent {...props}/>
    </div>
  );
};

export default Cart;
