import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Cart from "./Components/Cart/Cart.jsx";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import NotFound from "./Components/NotFound/NotFound";
import NavbarCustom from "./Components/NavbarCustom/NavbarCustom";
import Form from "./Components/Form/Form";
import CartContextProvider from "./context/CartContext";
import CheckoutContainer from "./Components/CheckoutContainer/CheckoutContainer";



function App() {


 
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavbarCustom />
        <Routes>
          <Route path="/" element={ <ItemListContainer /> }/>
          <Route path="/category/:categoryName" element={ <ItemListContainer /> }/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/formulario" element={<Form/>} />
          <Route path="/checkout" element={<CheckoutContainer/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;