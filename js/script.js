// Add your JavaScript code here

// Example: Display real-time weather conditions and forecasts
const weatherInfo = document.getElementById('data-display');

// Function to fetch weather data from OpenWeatherMap API
async function fetchWeatherData() {
  const apiKey = '06340f22374e6a4cbabfde3b32564415';
  const location = 'Durgapur,IN'; // Replace with the desired location
  
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
  
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    const temperature = data.main.temp + '°C';
    const humidity = data.main.humidity + '%';
    const condition = data.weather[0].description;
    
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${apiKey}`;
    const forecastResponse = await fetch(forecastUrl);
    const forecastData = await forecastResponse.json();
    
    const nextDayForecast = forecastData.list[8]; // Forecast for next day
    const nextDayHighTemp = nextDayForecast.main.temp_max + '°C';
    
    weatherInfo.innerHTML = `
      <h3>Current Weather</h3>
      <p>Temperature: ${temperature}</p>
      <p>Humidity: ${humidity}</p>
      <p>Condition: ${condition}</p>
      <h3>Forecast</h3>
      <p>Tomorrow: High of ${nextDayHighTemp}</p>
      
    `;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}


// Example: Display products in the marketplace
const productContainer = document.querySelector('.product-list');
// Simulating product data
const mockProducts = [
  { name: 'Organic Rice', price: '₹50/kg' },
  { name: 'Fresh Apples', price: '₹80/kg' },
  // Add more product data here
];
productContainer.innerHTML = `
  <h3>Products for Sale</h3>
  <ul>
    ${mockProducts.map(product => `<li>${product.name} - ${product.price}</li>`).join('')}
  </ul>
 
`;

// Example: Provide educational content in the knowledge hub
const knowledgeHub = document.querySelector('.knowledge-hub');
// Simulating educational content
const mockResources = [
  { title: 'Introduction to Precision Farming', link: 'https://en.wikipedia.org/wiki/Precision_agriculture' },
  { title: 'Crop Disease Identification', link: 'https://www.britannica.com/science/plant-disease' },
  // Add more educational resources here
];
knowledgeHub.innerHTML = `
  <h3>Knowledge Hub</h3>
  <ul>
    ${mockResources.map(resource => `<li><a href="${resource.link}" target="_blank">${resource.title}</a></li>`).join('')}
  </ul>
`;
