async function fetchUrls() {
    const response = await fetch('/get-urls');
    // const urls = await response.json();
    const urls = ["https://images.metmuseum.org/CRDImages/ep/original/LC-46_160-3.jpg","https://images.metmuseum.org/CRDImages/ep/original/DP-29324-001.jpg", "https://images.metmuseum.org/CRDImages/ep/original/LC-46_160-2.jpg"]
    return urls;
}

function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
    });
}

async function displayImages(urls) {
    const container = document.getElementById('image-container');
    let currentImage = null;

    for (const url of urls) {
        const nextImage = await loadImage(url);
        nextImage.classList.add('hidden');
        container.appendChild(nextImage);

        if (currentImage) {
            currentImage.classList.add('hidden');
            setTimeout(() => {
                container.removeChild(currentImage);
                nextImage.classList.remove('hidden');
                currentImage = nextImage;
            }, 1000); // Duration of the morphing transition
        } else {
            nextImage.classList.remove('hidden');
            currentImage = nextImage;
        }

        await new Promise(resolve => setTimeout(resolve, 3000)); // Time between images
    }
}

async function init() {
    const urls = await fetchUrls();
    displayImages(urls);
}

window.onload = init;
