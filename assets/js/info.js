//nav buttons
homeBtn = document.getElementById("home-button");
aboutBtn = document.getElementById("about-button");
worksBtn = document.getElementById("works-button");
contactBtn = document.getElementById("contact-button");

//content sections
const aboutInfo = document.getElementById("about-me");
const worksInfo = document.getElementById("my-works");
const contactInfo = document.getElementById("contact-me");

//button event listeners
homeBtn.addEventListener('click', function() {
    window.location.href = 'index.html';
});

worksBtn.addEventListener('click', function() {
    worksInfo.scrollIntoView({ behavior: 'smooth' });
});

contactBtn.addEventListener('click', function() {
    contactInfo.scrollIntoView({ behavior: 'smooth' });
});














































