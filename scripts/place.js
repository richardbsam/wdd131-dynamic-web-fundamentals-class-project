

// Get the current year and populate the span
document.getElementById("currentyear").innerText = new Date().getFullYear();

// Get the last modified date of the document and populate the second paragraph
document.getElementById("lastModified").innerText = "Last modified: " + document.lastModified;


const year = document.querySelector("#year");

document.querySelector("#dayofweek");

// use the date object
const today = new Date();

full.innerHTML = `Today is <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "full"
	}
).format(today)}</span>`;
worldfull.innerHTML = `UK: <span class="highlight">${new Intl.DateTimeFormat(
	"en-UK",
	{
		dateStyle: "full"
	}
).format(today)}</span>`;
short.innerHTML = `Short: <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "short"
	}
).format(today)}</span>`;
medium.innerHTML = `Medium: <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "medium"
	}
).format(today)}</span>`;

year.innerHTML = `getFullYear(): <span class="highlight">${today.getFullYear()}</span>`;
month.innerHTML = `getMonth(): <span class="highlight">${today.getMonth()}</span>`;
day.innerHTML = `getDate(): <span class="highlight">${today.getDate()}</span>`;
dayofweek.innerHTML = `getDay(): <span class="highlight">${today.getDay()}</span>`;






function toggleNav() {
    var nav = document.querySelector('nav');
    var hamburgerIcon = document.getElementById('hamburgerIcon');
    var closeIcon = document.getElementById('closeIcon');
    
    nav.classList.toggle('active');
    hamburgerIcon.style.display = hamburgerIcon.style.display === 'none' ? 'block' : 'none';
    closeIcon.style.display = closeIcon.style.display === 'none' ? 'block' : 'none';
}




//place//

// Static values for temperature and wind speed
var temperature = 10; // Temperature in Celsius
var windSpeed = 5; // Wind speed in meters per second

// Function to calculate windchill factor
function calculateWindChill(temperature, windSpeed) {
  // Windchill calculation formula
  return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(2);
}

// Function to display windchill factor on page load
function displayWindChill() {
  var windChill = calculateWindChill(temperature, windSpeed);
  document.getElementById("windChill").innerText = windChill + " °C"; // Display windchill factor on the page
}

// Call displayWindChill function when the page loads
window.onload = displayWindChill;

