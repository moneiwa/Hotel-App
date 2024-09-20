import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./config/firebase"; // assuming your firebase config is in this file

// Function to add available rooms
const addAvailableItem = async (roomDetails) => {
    try {
        const availableRef = await addDoc(collection(db, "Rooms"), roomDetails);
        return availableRef;
    } catch (error) {
        console.error("Error adding room: ", error);
    }
};

// Function to fetch available rooms
const fetchRooms = async () => {
    const colRef = collection(db, "Rooms");
    const querySnapshot = await getDocs(colRef);
    const rooms = querySnapshot.docs.map((doc) => doc.data());
    return rooms;
};

export { addAvailableItem, fetchRooms };
