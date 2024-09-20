import React, { useState, useEffect } from 'react';
import { addAvailableItem, fetch } from "./db";
import './index.css'

function Bookings() {
    const [availableItem, setAvailableItem] = useState();
    const [list, setList] = useState([]);

    // Uncomment and use this useEffect to fetch data if needed
    useEffect(() => {
        const getdata = async () => {
            const data = await fetch();   
            setList(data);
            console.log(data);    
        };
        getdata();
    }, []);

    const handleAddAvailableItem = () => {
        addAvailableItem(availableItem).then(() => {
            alert("Successfully added");
        }).catch((error) => {
            console.error("Error adding item: ", error);
            alert("Error adding item");
        });
    };






    // const Book(){

    //   useEffect(() => {
    //     const getdata = async () => {
    //         const data = await fetch();   
    //         setList(data);
    //         console.log(data);    
    //     };
    //     getdata();
    // }, []);


    // }



    

    return (
        <div className='roomsl'>
            <ul>
                <li>
                  
                    <input
                        type="text"
                        placeholder="availableRooms"
                        onChange={(e) => setAvailableItem(e.target.value)}
                    />

<input
                        type="text"
                        placeholder="number of guests"
                        onChange={(e) => setAvailableItem(e.target.value)}
                    />

<input
                        type="number"
                        placeholder="Prices"
                        onChange={(e) => setAvailableItem(e.target.value)}
                    />




                    <button onClick={handleAddAvailableItem}>Add</button>
                </li>
            </ul>

            
{

console.log(list)

}
{/* <form>
      {list.map((item, index)=>(
          <li key={index} >{item.availableItem}</li>
      ))}

</form> */}
        </div>
    );
}

export default Bookings;
