import { useState } from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import Button from "@mui/material/Button";
import style from "./ItemCount.module.css";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  
  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };
  return (
    <div>
      <h1>{contador}</h1>
      <div className={style.addSub}>
        <FiArrowLeftCircle  onClick={restar} />
        <FiArrowRightCircle onClick={sumar} />
      </div>
      <Button onClick={() => onAdd(contador)} size="small" variant="outlined">
        Agregar
      </Button>
      {/* <button  onClick={() => onAdd(contador)} >Abregar al Carrito</button> */}
    </div>
  );
};

export default ItemCount;
