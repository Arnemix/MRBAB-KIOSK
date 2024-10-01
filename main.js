const images = [];

for (let i = 1; i <= 183; i++) {
    images.push(`./assets/image- (${i}).jpg`);
}

let currentImageIndex = 0;

const imageElement = document.querySelector(".kiosk-asset img");

function updateImage() {
    imageElement.src = images[currentImageIndex];
    let counter = document.getElementById("counter");
    counter.innerHTML = "N°" + (currentImageIndex + 1) + "/" + images.length;
}

function showPreviousImage() {
    currentImageIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    updateImage();
}

function showNextImage() {
    currentImageIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    updateImage();
}

document.getElementById("prevButton").addEventListener("click", showPreviousImage);
document.getElementById("nextButton").addEventListener("click", showNextImage);

updateImage();
