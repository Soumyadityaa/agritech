// Add your JavaScript code here

// Example: Display user's activity history
const activityHistory = document.getElementById('activity-history');
// Simulating user's activity history
const mockActivityHistory = [
  { date: '2023-08-01', action: 'Uploaded harvest data' },
  { date: '2023-07-28', action: 'Applied recommended fertilizer' },
  // Add more activity data here
];
activityHistory.innerHTML = `
  <h3>Activity History</h3>
  <ul>
    ${mockActivityHistory.map(entry => `<li>${entry.date}: ${entry.action}</li>`).join('')}
  </ul>
`;

// Example: Save user profile data
const profileForm = document.getElementById('profile-form');
profileForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const farmName = document.getElementById('farm-name').value;
  const location = document.getElementById('location').value;
  const crops = document.getElementById('crops').value;
  
  // Simulate saving data to a database
  // Replace this with actual API calls or data handling
  console.log('Saving profile data:', { name, farmName, location, crops });
});
