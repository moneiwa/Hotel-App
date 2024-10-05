# Hotel App

## Overview

The **Hotel App** web application that allows users to browse, book, and manage accommodations. With user authentication.

## Features

### User Authentication
- **Firebase Authentication**: Users can register and log in securely using Firebase.

### Accommodation Listings
Users can view a list of available accommodations, which includes:
- **Photo Gallery**: Images showcasing the hotel.
- **Map**: Interactive map showing the hotel’s location.
- **Price Details**: Clear cost per night and any additional pricing information.
- **Basic Information**: Address, star rating, and other relevant details.
- **Hotel Facilities & Policies**: Amenities offered and important policies.


### Booking Functionality
Users can:
- Select check-in and check-out dates.
- Specify the number of rooms and guests.
- Complete bookings through an integrated payment gateway of your choice.

### User Profile
Users have a dedicated profile section to:
- View and edit their profile.
- Check bookings and favorite accommodations.

### Admin Panel
Admins can:
- Log into a secure admin panel.
- Add new accommodations with details such as room type, capacity, and availability.
- View and manage reservations, including check-in/out dates and guest details.
- Update accommodation information like pricing and availability.

### Data Storage
- Use **Firebase Firestore/Real-time Database** to store:
  - Accommodation listings
  - User data
  - Booking information

### State Management
- Implement **Redux** for efficient state management across the application.

### Additional Features
- **Search Functionality**: Users can filter accommodations by location, price, and other criteria.
- **Reviews & Ratings**: Users can leave feedback on accommodations.
- **Notifications**: Users receive alerts for booking confirmations and updates.

### Security
- Implement robust security measures to protect user data and payment transactions.

### Scalability & Performance
- Design the app to handle a large number of users and accommodations.
- Optimize performance for a smooth user experience.

### Compliance
- Ensure compliance with regulations regarding user data and transactions.

### Responsive Design
- The app should function well across various devices and screen sizes.

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.
- Firebase account for authentication and database services.
- Payment gateway account for processing transactions.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/moneiwa/Hotel-App.git
   cd hotel-app

