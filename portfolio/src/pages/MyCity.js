import { useEffect, useState } from 'react';

const MyCity = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=14455e2f5fee515dfc2a9fa4a1658e1d')
      .then(response => response.json())
      .then(data => setWeather(data));
  }, []);

  if (!weather) {
    return <p>Завантаження...</p>;
  }

  return (
    <div>
      <h1>Моє місто: Київ</h1>
      <p>Температура: {weather.main.temp}°C</p>
      <p>Опис: {weather.weather[0].description}</p>
      <p>Координати: {weather.coord.lat}, {weather.coord.lon}</p>
    </div>
  );
};

export default MyCity;
