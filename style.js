// Example data for episodes
const episodes = [
    { id: 1, title: "Naruto", thumbnail: "photo/website/naruto_th.jpg", src: "https://youtube.com" },
    { id: 2, title: "One Piece", thumbnail: "assets/thumbnails/ep2.jpg", src: "assets/episodes/ep2.mp4" },
    { id: 3, title: "Episode 3", thumbnail: "assets/thumbnails/ep3.jpg", src: "assets/episodes/ep3.mp4" },
    { id: 4, title: "Episode 4", thumbnail: "assets/thumbnails/ep4.jpg", src: "assets/episodes/ep4.mp4" }
  ];
  
  const episodeList = document.getElementById('episodeList');
  
  // Generate episode list dynamically
  episodes.forEach(ep => {
    const epItem = document.createElement('div');
    epItem.classList.add('episode-item');
    epItem.innerHTML = `
      <img src="${ep.thumbnail}" alt="${ep.title}">
      <h3>${ep.title}</h3>
      <a href="episode.html?src=${encodeURIComponent(ep.src)}">Watch Now</a>
    `;
    episodeList.appendChild(epItem);
  });
