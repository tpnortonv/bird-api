// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const app = express();

// Use the port defined in .env or default to 3000 if not set
const port = process.env.PORT || 3000;

// Sample data for 10 bird types
const birds = [
  {
    "name": "Bald Eagle",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Bald_Eagle_%28Haliaeetus_leucocephalus%29.jpg",
    "weight": "3.6 - 6.3 kg",
    "size": "70 - 90 cm",
    "speed": "160 km/h",
    "description": "The Bald Eagle is a bird of prey found in North America. It is known for its white head and tail feathers and is the national bird of the United States."
  },
  {
    "name": "Peregrine Falcon",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/19/Falco_peregrinus_-flying-8.jpg",
    "weight": "0.5 - 1.5 kg",
    "size": "34 - 58 cm",
    "speed": "389 km/h (fastest bird)",
    "description": "The Peregrine Falcon is the fastest bird in the world, capable of reaching speeds up to 389 km/h during its hunting stoop."
  },
  {
    "name": "Golden Eagle",
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Golden_Eagle_01.jpg",
    "weight": "3 - 6.3 kg",
    "size": "66 - 102 cm",
    "speed": "240 km/h",
    "description": "The Golden Eagle is a large bird of prey found in the Northern Hemisphere. It is known for its powerful build and impressive hunting abilities."
  },
  {
    "name": "Great Horned Owl",
    "image": "https://upload.wikimedia.org/wikipedia/commons/9/98/Great_Horned_Owl_-_Bubo_virginianus.jpg",
    "weight": "0.6 - 2 kg",
    "size": "45 - 60 cm",
    "speed": "40 km/h",
    "description": "The Great Horned Owl is a large owl native to the Americas. It is recognized for its tufted 'horns' and is an excellent nocturnal hunter."
  },
  {
    "name": "American Robin",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Turdus_migratorius_-_American_Robin.jpg",
    "weight": "77 - 85 g",
    "size": "23 - 28 cm",
    "speed": "40 km/h",
    "description": "The American Robin is a migratory songbird native to North America. It is recognized for its red-orange breast and is often associated with the arrival of spring."
  },
  {
    "name": "Scarlet Macaw",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/56/Scarlet_Macaw_-_Ara_macao.jpg",
    "weight": "0.9 - 1.6 kg",
    "size": "76 - 86 cm",
    "speed": "56 km/h",
    "description": "The Scarlet Macaw is a large, colorful parrot native to Central and South America. It is known for its vibrant red, blue, and yellow plumage."
  },
  {
    "name": "Kingfisher",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Kingfisher.jpg",
    "weight": "35 - 50 g",
    "size": "16 - 18 cm",
    "speed": "40 km/h",
    "description": "Kingfishers are small to medium-sized birds known for their striking blue feathers and their ability to dive into water to catch fish."
  },
  {
    "name": "Peacock",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a1/Peacock_in_sun.jpg",
    "weight": "3 - 6 kg",
    "size": "100 - 150 cm",
    "speed": "16 - 24 km/h",
    "description": "The Peacock is a large bird known for its iridescent tail feathers that are fanned out during courtship displays."
  },
  {
    "name": "Andean Condor",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/16/Andean_condor_%28Vultur_griffiths%29.jpg",
    "weight": "11 - 15 kg",
    "size": "100 - 115 cm",
    "speed": "80 km/h",
    "description": "The Andean Condor is a giant vulture found in South America, known for its impressive wingspan of up to 3.3 meters."
  },
  {
    "name": "Albatross",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Wandering_Albatross.jpg",
    "weight": "3.5 - 12 kg",
    "size": "102 - 135 cm",
    "speed": "127 km/h",
    "description": "The Albatross is a large seabird famous for its ability to glide for long distances without flapping its wings, spending most of its life over the ocean."
  }
];

// Create a route to serve the birds data
app.get('/api/birds', (req, res) => {
  res.json(birds);
});

// Serve the bird data at the root path
app.get('/', (req, res) => {
  res.json(birds);
});

// Start the server using the port from .env or default to 3000
app.listen(port, () => {
  console.log(`Birds API running at http://localhost:${port}/api/birds`);
});
