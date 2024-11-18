import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProducts, getCategory } from '../firebase/db'
import ItemList from './ItemList'
import Loader from "./Loader"

function ItemListContainer (){
  const [items, setItems] =useState([])
  const {id} = useParams()
 
  

  useEffect(() =>{
   
    if (!id){
      getProducts ()
        .then(res => setItems(res))
    }
    else{
      getCategory(id)
      .then(res => setItems(res))
    }
  }, [id])

    return (
          <>
          {items.length > 0 ? <ItemList items={items} /> : <Loader />}
           
          </>
    )
}

export default ItemListContainer
