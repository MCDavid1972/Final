import "./CardWidget.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const CardWidget = () => {

  const { getTotalQuantity } = useContext( CartContext )

  const total = getTotalQuantity()
  

  return (
    <Link to="cart" style={{ textDecoration: "none" }}>
      <IconButton color="inherit" size="large" edge="start" aria-label="menu" style={{ position: "relative" }}>
        <ShoppingCartIcon />
        <div className="buble-count">
          <span>{total}</span>
        </div>
      </IconButton>
    </Link>
  );
};

export default CardWidget;
