// src/store/hotelSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    hotelInfo: {
        name: "Beach Front Hotel",
        address: "8001, 8 Nelson Mandela Rd, Bay, Cape Town, 8060",
        nearbyAttractions: [
            "SkyPoint Observation Deck",
            "The Wax Museum",
            "Harley Park",
            "Keith Hunt Park",
            "Burleigh Head National Park",
            "Southport Broadwater Parklands",
        ],
        airports: [
            { name: "Gold Coast Airport", distance: 24 },
            { name: "Brisbane Airport", distance: 65 },
            { name: "Lismore Airport", distance: 97 },
        ],
        beaches: [
            "Harley Park Beach",
            "The Spit",
            "Broadwater Parklands Beach",
            "Connor Hurley Beach",
        ],
        topAttractions: [
            "Table Mountain",
            "Victoria & Alfred Waterfront",
            "Tiger's Milk Long Street",
            "Groot Constantia",
            "Chapman's Peak",
        ],
    },
};

const hotelSlice = createSlice({
    name: 'hotel',
    initialState,
    reducers: {},
});

export default hotelSlice.reducer;
