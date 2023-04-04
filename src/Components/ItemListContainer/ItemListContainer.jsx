import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import BounceLoader from "react-spinners/BounceLoader";
import { db } from "../../fireBaseConfig";
import{  collection, getDocs, query, where } from "firebase/firestore"

const override= {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const ItemListContainer = () => {
  const  { categoryName } = useParams();
  
  const [items, setItems] = useState([])

 useEffect( ()=>{
 
      const itemsCollection = collection(db,"products")

      let consulta = undefined

      if(categoryName){
        const q = query(itemsCollection, where("category", "==", categoryName))
        consulta= getDocs(q)
      }else{
        consulta= getDocs(itemsCollection)
      }
      consulta.then ( res => {
        let products = res.docs.map((product)=>{
          return{
            ...product.data(),
            id: product.id
          }
        })
         setItems(products)
      })
  },[categoryName])
    
  return (
  <div >
   
    {
      items.length > 0 ? (
      <ItemList items={items}/> ):( <BounceLoader
       color={"#f957b8"}
      cssOverride={override}  
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
    )}
  </div>
)};

export default ItemListContainer;
