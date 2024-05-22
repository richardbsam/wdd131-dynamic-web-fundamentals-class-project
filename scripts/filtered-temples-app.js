
document.addEventListener("DOMContentLoaded", function() {
	const templeContainer = document.getElementById("templeContainer");
  
	temples.forEach(temple => {
	  const templeCard = document.createElement("div");
	  templeCard.className = "temple-card";
  
	  templeCard.innerHTML = `
		<h2>${temple.templeName}</h2>
		<p><strong>Location:</strong> ${temple.location}</p>
		<p><strong>Dedicated:</strong> ${temple.dedicated}</p>
		<p><strong>Area:</strong> ${temple.area} sq ft</p>
		<img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
	  `;
  
	  templeContainer.appendChild(templeCard);
	});
  });
  


  document.addEventListener("DOMContentLoaded", function() {
	const templeContainer = document.getElementById("templeContainer");
  
	// Function to create and display temple cards
	function displayTemples(temples) {
	  templeContainer.innerHTML = ''; // Clear the container
	  temples.forEach(temple => {
		const templeCard = document.createElement("div");
		templeCard.className = "temple-card";
		templeCard.innerHTML = `
		  <h2>${temple.templeName}</h2>
		  <p><strong>Location:</strong> ${temple.location}</p>
		  <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
		  <p><strong>Area:</strong> ${temple.area} sq ft</p>
		  <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
		`;
		templeContainer.appendChild(templeCard);
	  });
	}
  
	// Filter functions
	function filterOld() {
	  return temples.filter(temple => new Date(temple.dedicated.split(',').join('-')) < new Date('1900-01-01'));
	}
  
	function filterNew() {
	  return temples.filter(temple => new Date(temple.dedicated.split(',').join('-')) > new Date('2000-01-01'));
	}
  
	function filterLarge() {
	  return temples.filter(temple => temple.area > 90000);
	}
  
	function filterSmall() {
	  return temples.filter(temple => temple.area < 10000);
	}
  
	// Event listeners for navigation links
	document.querySelectorAll('nav a').forEach(link => {
	  link.addEventListener('click', function(event) {
		event.preventDefault();
		const filter = event.target.getAttribute('data-filter');
		switch (filter) {
		  case 'old':
			displayTemples(filterOld());
			break;
		  case 'new':
			displayTemples(filterNew());
			break;
		  case 'large':
			displayTemples(filterLarge());
			break;
		  case 'small':
			displayTemples(filterSmall());
			break;
		  default:
			displayTemples(temples); // Home or all temples
			break;
		}
	  });
	});
  
	// Initially display all temples
	displayTemples(temples);
  });
  








