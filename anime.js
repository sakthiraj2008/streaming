const urlParams = new URLSearchParams(window.location.search);
const animeId = urlParams.get('id');
const animeTitle = document.getElementById('animeTitle');
const episodeList = document.getElementById('episodeList');

async function loadAnimeDetails() {
  // Fetch anime data to get the title
  const resAnime = await fetch('anime.json');
  const animeData = await resAnime.json();

  const anime = animeData.find(a => a.id === Number(animeId));
  if (anime) {
    animeTitle.textContent = anime.title;
  }

  // Fetch episodes for the anime
  const resEpisodes = await fetch('episodes.json');
  const episodesData = await resEpisodes.json();

  if (episodesData[animeId]) {
    displayEpisodes(episodesData[animeId]);
  }
}

function displayEpisodes(episodes) {
  episodeList.innerHTML = '';
  episodes.forEach(episode => {
    const episodeItem = document.createElement('div');
    episodeItem.classList.add('episode-item');
    episodeItem.innerHTML = `
      <h3>${episode.title}</h3>
      <a href="${episode.downloadLink}" class="download-btn" download="${episode.title.replace(/\s+/g, '_')}.mp4">
        ⬇️ Download
      </a>
    `;
    episodeList.appendChild(episodeItem);
  });
}

loadAnimeDetails();
