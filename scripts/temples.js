

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






function toggleNav() {
    var nav = document.querySelector('nav');
    var hamburgerIcon = document.getElementById('hamburgerIcon');
    var closeIcon = document.getElementById('closeIcon');

    nav.classList.toggle('active');
    
    if (hamburgerIcon.style.display === 'none') {
        hamburgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    } else {
        hamburgerIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    }
}
