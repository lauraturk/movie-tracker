# Movie Tracker
[Production Site](https://themovietracker.herokuapp.com/)

Movie Tracker is a React.js/Redux.js app built with router and a Node.js/express back-end that pulls movie details from [The Movie DB](https://www.themoviedb.org/documentation/api). The app allows users to browse recently released movies and favorite individual movies. The favorite movies are saved to the user's dashboard.

Movie Tracker was assigned as an introductory project for Redux and React-Router. It was completed in seven days by a group of three members.
* [Original Project Description](https://github.com/turingschool-examples/movie-tracker)

# Project Status
The project is complete

# Technology
* React.js
* Redux.js
* Router
* PostgreSQL backend to save user favorites
* Deployed to Heroku

# Screenshots
#### Homescreen with movies favorited:
![Homescreen with movies favorited](https://github.com/anderswood/movie-tracker/blob/master/app/components/images/movie-tracker%20screenshot.png)

#### Favorites dashboard:
![Favorites dashboard](https://github.com/anderswood/movie-tracker/blob/master/app/components/images/movie-tracker%20favorites.png)

#### User login and account setup:
![User login and account setup](https://github.com/anderswood/movie-tracker/blob/master/app/components/images/movie-tracker%20login.png)

# Installation and Setup Instructions
* clone repo
* npm install
* Install PostgreSQL if you don't have it: [postgresapp](http://postgresapp.com/)
* npm run build
* npm start

# Reflection
The main goal for this Turing project was to learn Redux and incorporate API calls and promises. The challenge of this project - besides learning Redux - was implementing the Redux store in a project of this size and integrating the Redux store into our understanding of React components and lifecycles. 

## Resources
* Starter repo: [starter](https://github.com/turingschool-examples/movie-tracker)

#### Wireframes:
Laura Turk created these wireframes in Sketch in order to have a point of reference for the necessary action creators, reducers, and containers, as well as to guide our ultimate design.
![Favorites Page](https://github.com/anderswood/movie-tracker/blob/master/app/components/images/wireframe-favorites.png)
![Home Page](https://github.com/anderswood/movie-tracker/blob/master/app/components/images/wireframe-home.png)
![Sign-In Page](https://github.com/anderswood/movie-tracker/blob/master/app/components/images/wireframe-signin.png)
