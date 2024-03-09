# PokeDeck Project Readme

## Project Description

Welcome to PokeDeck, a web application that allows users to explore and learn about various Pokémon! This project integrates the Rails backend with React on the frontend, following the MVC (Model-View-Controller) architecture. The application retrieves Pokémon data from the Pokedex API, providing users with a delightful experience to discover information about their favorite creatures.

## Architecture

### MVC Architecture

The project follows the MVC architecture to ensure a clear separation of concerns:

- **Model:** Services that interacts with the Pokedex API to fetch Pokémon details.
- **View:** React components responsible for rendering the user interface.
- **Controller:** Manages the flow of data between the model layer (services) and the requests.

## Features

- **Pokedex Integration:** The application fetches data from the Pokedex API to provide users with up-to-date information on Pokémon.

- **Card View:** Each Pokémon is displayed on a card, allowing users to easily see important details such as name, type, and abilities.

- **Reusable Components:** The components are designed to be reusable, promoting maintainability and scalability.

- **Caching Mechanism:** To enhance performance, the service implements a caching mechanism to store remote information during the day. This reduces the number of API calls and speeds up user interactions.

## Testing

The project includes comprehensive testing to ensure the reliability and functionality of the service.

## Benefits

- **User-Friendly Interface:** The React frontend provides a smooth and interactive experience for users.

- **Up-to-Date Information:** Integration with the Pokedex API ensures that users have access to the latest Pokémon data.

- **Performance Optimization:** Caching helps reduce response times by storing frequently accessed data, enhancing the overall user experience.

- **Scalability:** The project's MVC architecture and reusable components make it easy to scale and extend functionalities.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository.
2. Install dependencies using `yarn install` for the frontend and `bundle install` for the backend.
3. Run the Rails server.
4. Open your browser and navigate to the specified local address.
