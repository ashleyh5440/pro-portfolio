const yBtn = document.getElementById("y-button");
const aBtn = document.getElementById("a-button");
const bBtn = document.getElementById("b-button");
const backBtn = document.getElementById("back-button");

const aboutInfo = document.getElementById("about-me");
const worksInfo = document.getElementById("my-works");
const contactInfo = document.getElementById("contact-me");

const baseImg = document.getElementById("header-img")

yBtn.addEventListener('click', function() {
    backBtn.classList.remove("hidden");
    contactInfo.classList.remove("hidden");
    baseImg.classList.add("hidden")
});

aBtn.addEventListener('click', function() {
    backBtn.classList.remove("hidden");
    aboutInfo.classList.remove("hidden");
    baseImg.classList.add("hidden")
});

bBtn.addEventListener('click', function() {
    backBtn.classList.remove("hidden");
    worksInfo.classList.remove("hidden");
    baseImg.classList.add("hidden")
});

backBtn.addEventListener('click', function() {
    baseImg.classList.remove("hidden")
    contactInfo.classList.add("hidden");
    aboutInfo.classList.add("hidden");
    worksInfo.classList.add("hidden");
});



















































