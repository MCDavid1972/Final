import React from 'react'
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const CartComponent = ({cart, deleteProductById, precioTotal, clear, shouldShowCheckout}) => {
  return (
    <div>
      {cart.map((elemento) => {
        return (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              border: "2px solid gray",
            }}
            key={elemento.id}
          >
            <img
              style={{ width: "150px", height: "150px" }}
              src={elemento.img}
              alt=""
            />
            <h2> {elemento.nombre}</h2>
            <h3> $ {elemento.precio}</h3>
            <h3>cantidad: {elemento.quantity}</h3>
            <Button onClick={() => deleteProductById(elemento.id)}> Eliminar</Button>
          </div>
        ); 
      })}
            
      <h1>El total del Carrito es: {precioTotal} </h1>
      {
        cart.length > 0 && (
          <>
            <Button sx={{bgcolor: "#ddd"}} onClick={clear}>Limpiar Carrito</Button>
            <Button sx={{bgcolor: "#ddd", ml: "20px" }} onClick={shouldShowCheckout}>
              <Link to="../checkout"> Ir a pagar</Link>
            </Button>
          </>
        )
      }

    </div>
  )
}

export default CartComponent