const animeList = document.getElementById('animeList');
const searchInput = document.getElementById('searchInput');
const genreFilter = document.getElementById('genreFilter');
const darkModeToggle = document.getElementById('darkModeToggle');

let animeData = [];

// Fetch Anime Data from JSON
async function loadAnimeData() {
  const res = await fetch('anime.json');
  animeData = await res.json();
  displayAnime(animeData);
}

// Display Anime List
function displayAnime(list) {
  animeList.innerHTML = '';
  list.forEach(anime => {
    const animeItem = document.createElement('div');
    animeItem.classList.add('anime-item');
    animeItem.innerHTML = `
      <img src="${anime.thumbnail}" alt="${anime.title}">
      <h3>${anime.title}</h3>
      <p>Genre: ${anime.genre}</p>
      <p>⭐ ${anime.rating.toFixed(1)}/5</p>
      <a href="${anime.downloadLink}" class="download-btn" download="${anime.title.replace(/\s+/g, '_')}.mp4">
         Download
      </a>
    `;
    animeList.appendChild(animeItem);
  });
}

// Search Functionality
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filtered = animeData.filter(anime =>
    anime.title.toLowerCase().includes(query)
  );
  displayAnime(filtered);
});

// Filter by Genre
genreFilter.addEventListener('change', () => {
  const genre = genreFilter.value;
  const filtered = genre
    ? animeData.filter(anime => anime.genre === genre)
    : animeData;
  displayAnime(filtered);
});

// Dark Mode Toggle
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Load Dark Mode State from LocalStorage
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
}

// Load Anime Data on Startup
loadAnimeData();
