# Camper Van Rental Website

This website is a platform for renting camper vans, designed to provide users
with an easy and convenient way to find, explore, and save their favorite camper
vans for their next adventure. Whether you're planning a road trip, camping
excursion, or outdoor getaway, our platform offers a wide selection of camper
vans to suit your needs.

## Features

### Home Page

The home page welcomes users and provides an overview of the site's features and
offerings. Users can navigate to different sections of the website from the home
page.

### Catalog

The catalog section showcases all available camper vans for rent. Users can
browse through the catalog, filter and search for camper vans based on their
preferences, view detailed information about each camper van, and make rental
bookings.

### Favorites

Users can save their favorite camper vans to their personal favorites list. This
feature allows users to easily access and revisit camper vans they are
interested in renting without having to search for them again.

## Technologies Used

Frontend: React.js, Redux Toolkit, Styled Components.

Backend: https://mockapi.io/.

Third party library: react-loader-spinner, react-simple-star-rating.

API: Axios for HTTP requests Deployment: GitHub Pages (frontend).

## Preparing for coding

1. Make sure you have an LTS version of Node.js installed on your computer.
   [Download and install](https://nodejs.org/en/) if needed.
2. Clone the repository: git clone <repository-url>.
3. Install the project's base dependencies with the `npm install` command.
4. Start development mode by running the `npm start` command.
5. Go to [http://localhost:3000](http://localhost:3000) in your browser. This
   page will automatically reload after saving changes to the project files.

### Routing

If your application uses the `react-router-dom` library for routing, you must
additionally configure the `<BrowserRouter>` component by passing the exact name
of your repository in the `basename` prop. Slashes at the beginning and end of
the line are required.

```jsx
<BrowserRouter basename="/rent-camper/">
  <App />
</BrowserRouter>
```

## Getting Started

To get started with renting a camper van, simply navigate to the website and
explore the catalog. Use the search and filter options to find camper vans that
meet your requirements, and add your favorites to the favorites list for easy
access later.

Happy camping!
