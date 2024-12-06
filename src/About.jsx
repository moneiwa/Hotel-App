import React from 'react';
import './index.css';
import bath from './assets/bath.jpg';
import beach from './assets/beach.jpg';
import bed from './assets/bed.jpg';
import mm from './assets/mm.jpg';
import ney from './assets/ney.jpg';
import { useSelector } from 'react-redux';

function About() {
    const hotelInfo = useSelector((state) => state.hotel.hotelInfo);

    return (
        <>
        <div className='v'>
            <div className='co'>
                <h1>{hotelInfo.name}</h1>

                <div className='coo'>
                <p>{hotelInfo.address}</p>
                
                </div>
                <h4>We welcome you to our luxurious landmark hotel where golden beaches and the warm Indian Ocean are just a shell’s throw away. You are assured of a relaxing and memorable stay in one of our 262 newly refurbished guestrooms, most of which have ocean views and outdoor balconies. Our function packages can be tailored to your budget.

Well located on Durban’s Golden Mile, the hub of our city’s entertainment district, there is easy access to Durban’s sporting and corporate facilities. For fun lovers, there’s the Suncoast Casino and Entertainment Complex a short 250m walk away; for sports fans, the Kings Park Sporting precinct (including the Moses Mabhida, Kings Park Swimming Pool and Kings Park Rugby Stadium), Kingsmead Cricket stadium, Cyril Geoghegan Cycling Track, and Greyville Race Course are within walking distance or a short drive away; and for business executives the ICC, Durban Exhibition Centre and Olive Convention Centre are all within five minutes drive of the Blue Waters Hotel.
</h4>
                </div>



                <div className='box'>
                    <div className='cont'>
                        <div className='on'>
                            <img src={ney} alt="Nearby" />
                        </div>
                        <div className='tw'>
                            <img src={bed} alt="Bedroom" />
                        </div>
                    </div>
                    <div className='cont'>
                        <div className='thre'>
                            <img src={bath} alt="Bathroom" />
                        </div>
                        <div className='four'>
                            <img src={beach} alt="Beach" />
                        </div>
                    </div>
                </div>
          

            <div className='dinetwo'>
                <h3>Come dine with us</h3>
                <p>Dine in style at the elegant Versailles Restaurant or kick back <br></br>at the Blue Dolphin Bar for cocktails and artisan pizza. In-room dining is available <br></br>15 hours a day.</p>
            </div>
            <div className='dineone'>
                <img src={mm} alt="Dining" />
            </div>

            <h2>Hotel surroundings</h2>
            <div className='near'>
                <div className='listone'>
                    <h2>What's nearby</h2>
                    <ul>
                        {hotelInfo.nearbyAttractions.map((attraction, index) => (
                            <li key={index}>{attraction}</li>
                        ))}
                    </ul>
                </div>
                <div className='listtwo'>
                    <h2>Airports nearby</h2>
                    <ul>
                        {hotelInfo.airports.map((airport, index) => (
                            <li key={index}>{airport.name} - {airport.distance} km</li>
                        ))}
                    </ul>
                </div>
                <div className='listthree'>
                    <h2>Beaches</h2>
                    <ul>
                        {hotelInfo.beaches.map((beach, index) => (
                            <li key={index}>{beach}</li>
                        ))}
                    </ul>
                </div>
                <div className='listfour'>
                    <h2>Top Attractions</h2>
                    <ul>
                        {hotelInfo.topAttractions.map((attraction, index) => (
                            <li key={index}>{attraction}</li>
                        ))}
                    </ul>
                </div>
            </div>
            </div>
        </>
    );
}

export default About;
