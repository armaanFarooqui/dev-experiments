// Parse flower id from URL
const route = window.location.pathname.split('/');
const choice = parseInt(route[route.length - 1], 10);

// Flower data
const flowers = ['Tulips', 'Roses', 'Daffodils'];
const attribution = [
    'Dina L, CC0, via Wikimedia Commons', 
    'Spring\'s Flowers, CC0, via Wikimedia Commons', 
    'NasserHalaweh, CC BY-SA 4.0, via Wikimedia Commons'
];

if ([1, 2, 3].includes(choice)) {

    // Update page with chosen flower
    document.getElementById('logo').textContent = flowers[choice - 1];
    document.getElementById('image').src = `/${flowers[choice - 1]}.jpg`;
    document.getElementById('attr').textContent = attribution[choice - 1];
}
else {
    document.body.innerHTML = '<h1> Invalid flower! </h1>'; // Error
}
