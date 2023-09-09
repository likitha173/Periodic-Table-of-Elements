// Example of how to load an image dynamically
const elementImages = {
    1: 'hydrogen.jpg', // Replace with the actual image URLs
    // Add images for other elements
};

document.querySelectorAll('.element').forEach((element) => {
    const atomicNumber = element.getAttribute('data-atomic-number');
    const imageSrc = elementImages[atomicNumber];
    if (imageSrc) {
        const img = document.createElement('img');
        img.src = imageSrc;
        element.querySelector('.element-info').appendChild(img);
    }
});
