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
      <a href="anime.html?id=${anime.id}" class="view-btn">
        📺 View Episodes
      </a>
    `;
    animeList.appendChild(animeItem);
  });
}
