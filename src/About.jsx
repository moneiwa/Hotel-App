// import React from 'react'
// import './index.css'
// import bath from './assets/bath.jpg'
// import beach from './assets/beach.jpg'
// import bed from './assets/bed.jpg'

// function About() {
//   return (

//     <><div className='head'>
//       <h1>Beach Front Hotel</h1>
//       <p1>8001, 8 Nelson Mandela Rd, Bay, Cape Town, 8060</p1>

//     </div><div className='co'>
//         <div className="grid-container">
//           <div className="on">Grid Item 1
//             <img src={beach} />
//           </div>
//           <div className="tw">Grid Item 2
//             <img src={bed} /></div>

//           <div className="thre" style={{ gridColumn: "2", gridRow: "1 / 3" }}>Grid Item 3
//             <img src={bath} /></div>
//         </div>
//       </div></>
//   )
// }

// export default About;
import React from 'react'
import './index.css'
import bath from './assets/bath.jpg'
import beach from './assets/beach.jpg'
import bed from './assets/bed.jpg'
import mm from './assets/mm.jpg'
import ney from './assets/ney.jpg'
function About() {
  return (

    <><><div className='co'>
      <div className='head'></div>
      <h1>Beach Front Hotel</h1>
      <p4>8001, 8 Nelson Mandela Rd, Bay, Cape Town, 8060</p4>


      <div className='box'>
        <div className='cont'>

          <div className='on'>
            <img src={ney} />
          </div>
          <div className='tw'>
            <img src={bed} />
          </div>
        </div>
        <div className='cont'>
          <div className='thre'>
            <img src={bath} />
          </div>
          <div className='four'>
            <img src={beach} />
          </div>
        </div>
      </div>
    </div>


      <div className='dinetwo'>  <h1>Come dine with us</h1>Dine in style at the elegant Versailles Restaurant or kick back at the Blue Dolphin Bar <br></br> for cocktails, artisan pizza. For coffee extraordinaire and fine dining, Café Jiran is a <br></br>one minutes’ walk away. In room dining is available 15 hours a day. </div>
      <div className='dineone'><img src={mm} />
      </div></>

      <h1>Hotel surroundings</h1>
      <div className='near'>

        <div className='listone'>
        <ul>
          <h2>What's nearby</h2>
          <h2></h2>
  <li>SkyPoint Observation Deck</li>
  <li>The Wax Museum</li>
  <li>Harley Park</li>
  <li>Keith Hunt Park</li>
  <li>Burleigh Head National Park</li>
  <li>Southport Broadwater Parklands</li>
</ul>



        </div>
        <div className='listtwo'>
          <h2>airports nearby</h2>
          <li>Gold Coast Airport
                   24 km</li>
  <li>Brisbane Airport
  65 km</li>
  <li>Lismore Airport
  97 km</li>
  </div>
        <div className='listthree'>
          <h2>Beaches</h2>
        <li>Harley Park Beach</li>
  <li>The Spit</li>
  <li>Broadwater Parklands Beach</li>
  <li>Connor Hurley Beach</li>

        </div>
        <div className='listfour'><h2>Top Attractions</h2>
  <li>Table Mountain</li>
  <li>Victoria & Alfred Waterfront</li>
  <li>tiger's Milk Long Street</li>
  <li>Groot Constantia</li>
  <li>Chapman's peak</li></div>
      </div></>
    
  )
}

export default About



// User Authentication:
// Users can register and log in using Firebase Authentication.


// Accommodation Listings:

// view a list of available accommodations.

// Each accommodation should display:
// Photo Gallery: Images of the hotel.
// Map: Location of the hotel.
// Price Details: Cost per night or other pricing information.
// Basic Information: Address, star rating, and other relevant details.
// Hotel Facilities & Policies: Amenities offered and policies.
// Call-to-Action Button: Button to book or view more details.
// Sharing Button: Share the accommodation details with others.
// Favourites Button: Save the accommodation to favourites.

// Booking Functionality:

// Users can book accommodations.
// Booking should include:
// Selecting check-in and check-out dates.
// Number of rooms, and guests, etc.

// Payments
// Implement a payment gateway of your choice.
// User Profile:
// Users have a profile section where they can view/edit their profile, view their bookings and favourite accommodations.


// Admin Panel:
// Admins can log in to an admin panel.
// Admins can add new accommodations with details like room type, capacity, price, availability, etc.
// Admins can view reservations, including check-in and check-out dates, guest details, room details, etc..
// Admins can manage reservations, including approving, modifying, or cancelling them.
// Admins can update accommodation details, such as room availability, pricing, descriptions, etc.
// Data Storage:
// Use Firebase Firestore/Real-time to store accommodation listings, user data, booking information, etc.
// State management
// Use Redux to manage the state of the hotel app.
// Additional Features:
// Search Functionality: Users can search for accommodations based on location, price, and other filters.
// Reviews & Ratings: Users can leave reviews and ratings for accommodations.
// Notifications: Users receive notifications for booking confirmations, updates, and promotions.
// Security:
// Implement proper security measures to protect user data and transactions.
// Additional- Scalability & Performance:
// Ensure the app is scalable to handle a large number of users and accommodations.
// Optimise performance for a smooth user experience.
// Compliance:
// Ensure compliance with relevant regulations and laws regarding user data and transactions.
// Responsive Design:
// The app should be responsive and work well on different devices and screen sizes.
// Please start with these Figma link below before you jump into the project