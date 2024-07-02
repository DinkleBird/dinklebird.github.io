JavaScript
// Bird data
const birds = [
  { name: "Blue Jay", fact: "They are known for their intelligence and mimicry skills.", image: "bluejay.jpg" },
  { name: "Cardinal", fact: "The male cardinal is bright red, while the female is a more subdued brown.", image: "cardinal.jpg" },
  // ... add more birds
];

// Generate table rows
const table = document.querySelector("table");
birds.forEach(bird => {
  const row = table.insertRow();
  row.insertCell().textContent = bird.name;
  row.insertCell().textContent = bird.fact;
});

// Generate image elements
const imageContainer = document.querySelector(".image-container");
birds.forEach(bird => {
  const img = document.createElement("img");
  img.src = bird.image;
  img.alt = bird.name;
  imageContainer.appendChild(img);
});