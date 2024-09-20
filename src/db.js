import {collection, addDoc, getDocs} from "firebase/firestore"
import {auth, db} from "./config/firebase"
// import {db} from "./db"

const addAvailableItem = (async (Item)=>{
    try{
    const availableRef =await addDoc(collection(db,"Rooms"),{
availableItem:Item
    })
    return availableRef;
}catch (error){

}})






const fetch = async () =>{
const colRef = collection (db,"Rooms");

   const querySnapshot = await getDocs(colRef); //snap epresenting a document in the collection.
   const ul = querySnapshot.docs.map((doc) =>  doc.data()); //transfer into data

    console.log(ul);
    return ul;

}

export {addAvailableItem,fetch};