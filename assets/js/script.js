
const yBtn = document.getElementById("y-button");
const aBtn = document.getElementById("a-button");
const bBtn = document.getElementById("b-button");

homeBtn = document.getElementById("home-button");
aboutBtn = document.getElementById("about-button");
worksBtn = document.getElementById("works-button");
contactBtn = document.getElementById("contact-button");

const aboutInfo = document.getElementById("about-me");
const worksInfo = document.getElementById("my-works");
const contactInfo = document.getElementById("contact-me");

yBtn.addEventListener('click', function() {
    window.location.href = 'info.html#contact-me';
});

aBtn.addEventListener('click', function() {
    window.location.href = 'info.html#about-me';
});

bBtn.addEventListener('click', function() {
    window.location.href = 'info.html#my-works';
});

homeBtn.addEventListener('click', function() {
    window.location.href = 'index.html';
});

worksBtn.addEventListener('click', function() {
    worksInfo.scrollIntoView({ behavior: 'smooth' });
    console.log(worksBtn)
});














































