// Fetch gallery data from backend API
async function fetchGallery() {
    const response = await fetch('https://localhost:5001/api/art'); // Adjust API endpoint as necessary
    const data = await response.json();

    // Render the gallery
    const gallery = document.querySelector('.art-grid');
    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('art-card');

        card.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.artist}</p>
            <p>Price: $${item.price}</p>
            <button>Buy Now</button>
        `;
        gallery.appendChild(card);
    });
}

// Initialize
fetchGallery();
