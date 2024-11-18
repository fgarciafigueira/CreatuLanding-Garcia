import { 
    getFirestore, 
    collection, 
    getDocs, 
    doc, 
    getDoc, 
    query, 
    where,
    addDoc } from "firebase/firestore";
import {app} from './config'


const db = getFirestore(app);

export const getProducts = async () =>{
    const querySnapshot = await getDocs(collection(db, "products"))

    const products= []

    querySnapshot.forEach((doc) => {
        products.push (doc.data())
    })

    return products
}

export const getDetail = async (id) =>{
    const docRef = doc(db, "products", id)
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()) {
    return docSnap.data()
    } else {
    console.log("No such document!")
    }
}

export const getCategory = async (id) =>{
    const q = query(collection(db, "products"), where("category", "==", id))
    const querySnapshot = await getDocs(q)
    const products= []

    querySnapshot.forEach((doc) => {
        products.push(doc.data())
    })

    return products
} 



  export const createOrder = async (order) =>{
    try {
        const docRef = await addDoc(collection(db, "orders"), order)
        return docRef
      } catch (e) {
        console.error("Error adding document: ", e)
      }
  }