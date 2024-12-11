# Weather App

A React-based weather application that fetches and displays current weather data for any city using the OpenWeather API. The app provides users with an intuitive interface to view detailed weather information, including temperature, wind speed, and humidity, and keeps track of recent searches.

---

## Features

- **Search for Weather Data:** Enter a city name to get current weather details.
- **Weather Details:**
  - Temperature (°C)
  - Wind speed (km/h)
  - Humidity (%)
  - Weather condition (e.g., sunny, cloudy, etc.)
- **Recent Searches:** View the last few cities you searched for weather.
- **Dynamic Loading State:** Displays a loading icon while fetching weather data.
- **Error Handling:** Provides a user-friendly message if data fetching fails.

---

## Tech Stack

- **Frontend:** React + TypeScript
- **State Management:** React State
- **API Integration:** React Query
- **Styling:** Tailwind CSS

---

## Installation

### Prerequisites

- Node.js (>= 16.x)
- npm or yarn package manager

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Add your OpenWeather API key:

   - Create a `.env` file in the root directory.
   - Add the following line, replacing `YOUR_API_KEY` with your OpenWeather API key:
     ```env
     REACT_APP_WEATHER_API_KEY=YOUR_API_KEY
     ```

4. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## File Structure

```
📂 src
├── 📂 components
│   ├── SearchBar.tsx           # Search input component
│   ├── WeatherData.tsx         # Displays weather details
│   ├── WeatherItemContainer.tsx # Recent searches display
├── 📂 conexion
│   └── Conexion.ts             # Handles API requests
├── 📂 types
│   └── Types.ts                # TypeScript interfaces for the app
├── App.tsx                     # Main application component
├── index.tsx                   # Entry point for React app
└── styles.css                  # Custom styles
```

---

## Usage

1. Enter the name of a city in the search bar and press enter.
2. View the current weather details.
3. Recent searches will appear below the main weather display.

---

## API

This app uses the [OpenWeather API](https://openweathermap.org/api). Make sure you have an API key before using the application.

---

## Contributing

Contributions are welcome! If you have ideas for improvements, please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- [OpenWeather API](https://openweathermap.org/api)
- [React Query Documentation](https://tanstack.com/query)
- [Tailwind CSS](https://tailwindcss.com/)
