# Weather App

## Description

This is a weather management application built with Angular and styled using Tailwind CSS. It allows users to manage a list of cities and view the weather forecast for each of them. Users can add new cities, remove existing ones, and toggle between dark and light modes. The app provides clear feedback for loading states and error handling.

The application is built with **responsive design**, ensuring that it looks and works well on all screen sizes, from mobile devices to desktops.

## Features

- **Add New Cities**: Users can add cities to their list and view their weather forecast.
- **Weather Forecast**: Displays weather forecast for current day and two days ahead for each city.
- **Error Handling**: If weather data cannot be fetched, an error message is shown.
- **Loading State**: A loading indicator appears while weather data is being fetched.
- **Dark Mode**: Toggle between dark and light modes. The setting is saved in the browser’s local storage for persistence.

## Link
You can check out the live version of the app here: [https://weather-app-nubisoft.web.app](https://weather-app-4151b.web.app/)

## Installation

To run the application locally, follow these steps:

1. Clone the repository:

  ```bash
  git clone https://github.com/MateuszOlszanecki/weather-app-with-weatherapi.git
  ```

2. Navigate to the project folder:

  ```bash
  cd weather-app-with-weatherapi
  ```

3. Install the dependencies:

  ```bash
  npm install
  ```

4. Add API KEY:

   Create folder `environments` in `src` folder and in this folder create file `environment.ts`.
   In `environment.ts` file paste this code:

  ```bash
  const WEATHER_API_KEY = 'your-weatherapi-api-key';
  export default WEATHER_API_KEY;
  ```

5. Run the application:

  ```bash
  ng serve
  ```

6. Paste this link into a browser:

  ```bash
  http://localhost:4200/
  ```

## Screenshots

Here are some screenshots of the application:

*Home page (Dark Mode) displaying a list of cities and their weather.*

![Home Page (Dark Mode)](https://github.com/user-attachments/assets/bafaa326-0f2f-459f-9c59-70a2ab0522db)

*Home page (Light Mode) displaying a list of cities and their weather.*

![Home Page (Light Mode)](https://github.com/user-attachments/assets/d0bc6d49-750f-4062-be11-0500a6e93183)

*Error and loading cards.*

![Error And Loading Cards](https://github.com/user-attachments/assets/fc9cc037-e5f0-4072-9f87-80874cea483b)
