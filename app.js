/* ══════════════════════════════════════════════════
   CINEVAULT — APP.JS
   Movie data, UI logic, search, player, my list
══════════════════════════════════════════════════ */

// ── MOVIE DATABASE ──────────────────────────────────
// Using Picsum for placeholder posters (aspect 2:3 crops)
// and Unsplash for hero backdrops

const movies = [
  /* 0 - Featured Hero */
  {
    id: 1,
    title: "Dune: Part Two",
    year: 2024,
    rating: 8.5,
    genre: ["Sci-Fi", "Adventure", "Trending"],
    director: "Denis Villeneuve",
    cast: "Timothée Chalamet, Zendaya, Rebecca Ferguson",
    desc: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he must prevent a terrible future only he can foresee.",
    poster: "https://picsum.photos/seed/dune2/400/600",
    backdrop: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1600&q=80",
    duration: "2h 46m",
  },
  /* 1 */
  {
    id: 2,
    title: "Oppenheimer",
    year: 2023,
    rating: 8.9,
    genre: ["Drama", "Thriller", "Trending"],
    director: "Christopher Nolan",
    cast: "Cillian Murphy, Emily Blunt, Matt Damon",
    desc: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.",
    poster: "https://picsum.photos/seed/oppen/400/600",
    backdrop: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80",
    duration: "3h 0m",
  },
  /* 2 */
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    genre: ["Action", "Crime", "Trending"],
    director: "Christopher Nolan",
    cast: "Christian Bale, Heath Ledger, Aaron Eckhart",
    desc: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster: "https://picsum.photos/seed/darkknight/400/600",
    backdrop: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600&q=80",
    duration: "2h 32m",
  },
  /* 3 */
  {
    id: 4,
    title: "Mad Max: Fury Road",
    year: 2015,
    rating: 8.1,
    genre: ["Action", "Adventure"],
    director: "George Miller",
    cast: "Tom Hardy, Charlize Theron, Nicholas Hoult",
    desc: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
    poster: "https://picsum.photos/seed/madmax/400/600",
    backdrop: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1600&q=80",
    duration: "2h 0m",
  },
  /* 4 */
  {
    id: 5,
    title: "John Wick",
    year: 2014,
    rating: 7.4,
    genre: ["Action", "Thriller"],
    director: "Chad Stahelski",
    cast: "Keanu Reeves, Michael Nyqvist, Alfie Allen",
    desc: "An ex-hitman comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
    poster: "https://picsum.photos/seed/johnwick/400/600",
    backdrop: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=1600&q=80",
    duration: "1h 41m",
  },
  /* 5 */
  {
    id: 6,
    title: "Top Gun: Maverick",
    year: 2022,
    rating: 8.3,
    genre: ["Action", "Drama"],
    director: "Joseph Kosinski",
    cast: "Tom Cruise, Miles Teller, Jennifer Connelly",
    desc: "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot.",
    poster: "https://picsum.photos/seed/topgun/400/600",
    backdrop: "https://images.unsplash.com/photo-1520437358207-323b43b50729?w=1600&q=80",
    duration: "2h 11m",
  },
  /* 6 */
  {
    id: 7,
    title: "The Grand Budapest Hotel",
    year: 2014,
    rating: 8.1,
    genre: ["Comedy", "Adventure"],
    director: "Wes Anderson",
    cast: "Ralph Fiennes, Tony Revolori, Saoirse Ronan",
    desc: "The adventures of Gustave H, a legendary concierge at a famous European hotel between the wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend.",
    poster: "https://picsum.photos/seed/grandbudapest/400/600",
    backdrop: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1600&q=80",
    duration: "1h 39m",
  },
  /* 7 */
  {
    id: 8,
    title: "Superbad",
    year: 2007,
    rating: 7.6,
    genre: ["Comedy"],
    director: "Greg Mottola",
    cast: "Jonah Hill, Michael Cera, Emma Stone",
    desc: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a final booze-filled party goes awry.",
    poster: "https://picsum.photos/seed/superbad/400/600",
    backdrop: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?w=1600&q=80",
    duration: "1h 53m",
  },
  /* 8 */
  {
    id: 9,
    title: "Knives Out",
    year: 2019,
    rating: 7.9,
    genre: ["Comedy", "Mystery"],
    director: "Rian Johnson",
    cast: "Daniel Craig, Ana de Armas, Chris Evans",
    desc: "A detective investigates the death of a patriarch of an eccentric, combative family.",
    poster: "https://picsum.photos/seed/knivesout/400/600",
    backdrop: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=1600&q=80",
    duration: "2h 10m",
  },
  /* 9 */
  {
    id: 10,
    title: "The Menu",
    year: 2022,
    rating: 7.2,
    genre: ["Comedy", "Horror", "Thriller"],
    director: "Mark Mylod",
    cast: "Ralph Fiennes, Anya Taylor-Joy, Nicholas Hoult",
    desc: "A young couple travels to a remote island to eat at an exclusive restaurant where the chef has prepared a lavish menu, with some shocking surprises.",
    poster: "https://picsum.photos/seed/themenu/400/600",
    backdrop: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80",
    duration: "1h 47m",
  },
  /* 10 */
  {
    id: 11,
    title: "Hereditary",
    year: 2018,
    rating: 7.3,
    genre: ["Horror", "Drama"],
    director: "Ari Aster",
    cast: "Toni Collette, Milly Shapiro, Gabriel Byrne",
    desc: "When the matriarch of the Graham family passes away, her daughter's family begins to unravel cryptic and increasingly terrifying secrets about their ancestry.",
    poster: "https://picsum.photos/seed/hereditary/400/600",
    backdrop: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=1600&q=80",
    duration: "2h 7m",
  },
  /* 11 */
  {
    id: 12,
    title: "Get Out",
    year: 2017,
    rating: 7.7,
    genre: ["Horror", "Thriller"],
    director: "Jordan Peele",
    cast: "Daniel Kaluuya, Allison Williams, Bradley Whitford",
    desc: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering unease about their reception of him eventually reaches a boiling point.",
    poster: "https://picsum.photos/seed/getout/400/600",
    backdrop: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&q=80",
    duration: "1h 44m",
  },
  /* 12 */
  {
    id: 13,
    title: "A Quiet Place",
    year: 2018,
    rating: 7.5,
    genre: ["Horror", "Sci-Fi"],
    director: "John Krasinski",
    cast: "Emily Blunt, John Krasinski, Millicent Simmonds",
    desc: "In a post-apocalyptic world, a family is forced to live in near silence while hiding from creatures that hunt by sound.",
    poster: "https://picsum.photos/seed/quietplace/400/600",
    backdrop: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=1600&q=80",
    duration: "1h 30m",
  },
  /* 13 */
  {
    id: 14,
    title: "Midsommar",
    year: 2019,
    rating: 7.1,
    genre: ["Horror", "Drama"],
    director: "Ari Aster",
    cast: "Florence Pugh, Jack Reynor, Vilhelm Blomgren",
    desc: "A couple travels to Northern Europe to visit a rural hometown's fabled Swedish midsummer festival. What begins as an idyllic retreat quickly devolves into an increasingly sinister competition.",
    poster: "https://picsum.photos/seed/midsommar/400/600",
    backdrop: "https://images.unsplash.com/photo-1470219556762-1771e7f9427d?w=1600&q=80",
    duration: "2h 28m",
  },
  /* 14 */
  {
    id: 15,
    title: "Everything Everywhere",
    year: 2022,
    rating: 7.8,
    genre: ["Trending", "Sci-Fi", "Comedy"],
    director: "Daniel Kwan, Daniel Scheinert",
    cast: "Michelle Yeoh, Ke Huy Quan, Jamie Lee Curtis",
    desc: "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save the world by exploring other universes and connecting with the lives she could have led.",
    poster: "https://picsum.photos/seed/eeaao/400/600",
    backdrop: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1600&q=80",
    duration: "2h 19m",
  },
];

// ── STATE ────────────────────────────────────────────
let currentMovie = null;  // Movie open in modal/player
let myList = JSON.parse(localStorage.getItem('cinevault_list') || '[]');

// ── INIT ─────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  // Loader
  setTimeout(() => {
    document.getElementById('loader').classList.add('fade-out');
    setTimeout(() => {
      document.getElementById('loader').style.display = 'none';
      initHero();
      renderGrids();
      updateBadge();
    }, 500);
  }, 1800);
});

// ── HERO ─────────────────────────────────────────────
function initHero() {
  const m = movies[0];
  document.getElementById('heroBg').style.backgroundImage = `url(${m.backdrop})`;
  document.getElementById('heroTitle').textContent = m.title;
  document.getElementById('heroDesc').textContent = m.desc;
}

// Rotate hero every 8s (optional flair)
let heroIndex = 0;
setInterval(() => {
  const candidates = movies.filter(m => m.genre.includes('Trending'));
  heroIndex = (heroIndex + 1) % candidates.length;
  const m = candidates[heroIndex];
  const bg = document.getElementById('heroBg');
  bg.style.opacity = 0;
  setTimeout(() => {
    bg.style.backgroundImage = `url(${m.backdrop})`;
    bg.style.transition = 'opacity 1s ease';
    bg.style.opacity = 1;
    document.getElementById('heroTitle').textContent = m.title;
    document.getElementById('heroDesc').textContent = m.desc;
  }, 500);
}, 8000);

// ── RENDER GRIDS ─────────────────────────────────────
function renderGrids() {
  renderGrid('trendingGrid', movies.filter(m => m.genre.includes('Trending')));
  renderGrid('actionGrid',   movies.filter(m => m.genre.includes('Action')));
  renderGrid('comedyGrid',   movies.filter(m => m.genre.includes('Comedy')));
  renderGrid('horrorGrid',   movies.filter(m => m.genre.includes('Horror')));
}

function renderGrid(containerId, list) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = list.map((m, i) => movieCard(m, i)).join('');
}

// ── CARD HTML ─────────────────────────────────────────
function movieCard(movie, delay = 0) {
  return `
    <div class="movie-card" style="animation-delay:${delay * 0.05}s"
         onclick="openModal(getMovieById(${movie.id}))">
      <img src="${movie.poster}" alt="${movie.title}" loading="lazy"
           onerror="this.src='https://picsum.photos/seed/${movie.id}extra/400/600'" />
      <div class="card-strip">
        <div class="strip-title">${movie.title}</div>
        <div class="strip-rating">⭐ ${movie.rating}</div>
      </div>
      <div class="card-overlay">
        <div class="card-title">${movie.title}</div>
        <div class="card-meta">
          <span class="card-rating">⭐ ${movie.rating}</span>
          <span>${movie.year}</span>
          <span>${movie.duration}</span>
        </div>
        <div class="card-actions">
          <button class="card-btn play" onclick="event.stopPropagation(); openPlayer(getMovieById(${movie.id}))">▶ Play</button>
          <button class="card-btn info" onclick="event.stopPropagation(); openModal(getMovieById(${movie.id}))">Info</button>
        </div>
      </div>
    </div>
  `;
}

function getMovieById(id) {
  return movies.find(m => m.id === id);
}

// ── PAGE SWITCHING ────────────────────────────────────
function showPage(page) {
  document.getElementById('homePage').classList.toggle('hidden', page !== 'home');
  document.getElementById('resultsPage').classList.toggle('hidden', page !== 'results');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── CATEGORY FILTER ───────────────────────────────────
function filterCategory(cat) {
  const filtered = cat === 'Series'
    ? movies.filter(m => m.genre.includes('Drama') || m.genre.includes('Series'))
    : movies.filter(m => m.genre.includes(cat));

  document.getElementById('resultsTitle').textContent = cat + ' Films';
  renderGrid('resultsGrid', filtered.length ? filtered : movies);
  showPage('results');
}

// ── SEARCH ────────────────────────────────────────────
function handleSearch(query) {
  query = query.trim().toLowerCase();
  if (!query) {
    if (document.getElementById('resultsPage').classList.contains('hidden') === false) {
      showPage('home');
    }
    return;
  }
  const results = movies.filter(m =>
    m.title.toLowerCase().includes(query) ||
    m.genre.some(g => g.toLowerCase().includes(query)) ||
    m.director.toLowerCase().includes(query) ||
    m.cast.toLowerCase().includes(query)
  );
  document.getElementById('resultsTitle').textContent = `Search: "${query}" (${results.length} results)`;
  renderGrid('resultsGrid', results.length ? results : []);
  if (!results.length) {
    document.getElementById('resultsGrid').innerHTML = `<p style="grid-column:1/-1;color:var(--text-muted);padding:40px 0;text-align:center;font-size:16px;">No movies found for "<strong>${query}</strong>"</p>`;
  }
  showPage('results');
}

function toggleSearch() {
  const wrap = document.getElementById('searchWrap');
  wrap.classList.toggle('open');
  if (wrap.classList.contains('open')) {
    document.getElementById('searchInput').focus();
  } else {
    document.getElementById('searchInput').value = '';
    showPage('home');
  }
}

// ── MY LIST ───────────────────────────────────────────
function showMyList() {
  const listMovies = movies.filter(m => myList.includes(m.id));
  document.getElementById('resultsTitle').textContent = `My List (${listMovies.length})`;
  if (listMovies.length === 0) {
    document.getElementById('resultsGrid').innerHTML = `<p style="grid-column:1/-1;color:var(--text-muted);padding:40px 0;text-align:center;font-size:16px;">Your list is empty. Add movies by clicking "+ My List".</p>`;
  } else {
    renderGrid('resultsGrid', listMovies);
  }
  showPage('results');
}

function toggleList() {
  if (!currentMovie) return;
  const id = currentMovie.id;
  const btn = document.getElementById('modalListBtn');

  if (myList.includes(id)) {
    myList = myList.filter(x => x !== id);
    btn.classList.remove('added');
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> My List`;
    showToast(`"${currentMovie.title}" removed from My List`);
  } else {
    myList.push(id);
    btn.classList.add('added');
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> In My List`;
    showToast(`"${currentMovie.title}" added to My List ✓`);
  }

  localStorage.setItem('cinevault_list', JSON.stringify(myList));
  updateBadge();
}

function updateBadge() {
  document.getElementById('myListCount').textContent = myList.length;
}

// ── MODAL ─────────────────────────────────────────────
function openModal(movie) {
  if (!movie) return;
  currentMovie = movie;

  document.getElementById('modalPoster').style.backgroundImage = `url(${movie.poster})`;
  document.getElementById('modalTag').textContent = movie.genre[0];
  document.getElementById('modalTitle').textContent = movie.title;
  document.getElementById('modalDesc').textContent = movie.desc;
  document.getElementById('modalCast').textContent = movie.cast;
  document.getElementById('modalMeta').innerHTML = `
    <span>${movie.year}</span>
    <span>⭐ ${movie.rating}</span>
    <span>${movie.duration}</span>
    <span>Dir. ${movie.director}</span>
  `;

  // Play button in modal
  const playBtn = document.getElementById('modalPlayBtn');
  playBtn.onclick = () => { closeModal(); openPlayer(movie); };

  // My List button state
  const listBtn = document.getElementById('modalListBtn');
  if (myList.includes(movie.id)) {
    listBtn.classList.add('added');
    listBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> In My List`;
  } else {
    listBtn.classList.remove('added');
    listBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> My List`;
  }

  document.getElementById('movieModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('movieModal').classList.add('hidden');
  document.body.style.overflow = '';
}

// ── PLAYER ────────────────────────────────────────────
// Sample videos from Google's public CDN
const sampleVideos = [
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
];

function openPlayer(movie) {
  if (!movie) return;
  currentMovie = movie;

  document.getElementById('playerTitle').textContent = movie.title;
  document.getElementById('playerMeta').textContent =
    `${movie.year} · ${movie.duration} · Dir. ${movie.director} · ⭐ ${movie.rating}`;

  // Assign a sample video (rotate by movie id)
  const video = document.getElementById('videoPlayer');
  const src = sampleVideos[movie.id % sampleVideos.length];
  video.src = src;
  video.load();

  document.getElementById('playerModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closePlayer() {
  const video = document.getElementById('videoPlayer');
  video.pause();
  video.src = '';
  document.getElementById('playerModal').classList.add('hidden');
  document.body.style.overflow = '';
}

// ── TOAST ─────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.remove('hidden');
  // Force reflow
  void t.offsetWidth;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    t.classList.remove('show');
    setTimeout(() => t.classList.add('hidden'), 300);
  }, 2600);
}

// ── NAV HELPERS ───────────────────────────────────────
function setActive(el) {
  document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
  el.classList.add('active');
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// Close mobile menu on outside click
document.addEventListener('click', (e) => {
  if (!e.target.closest('#navbar')) {
    document.getElementById('navLinks').classList.remove('open');
  }
});

// Close modals on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    closePlayer();
  }
});

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 40) {
    nav.style.boxShadow = '0 4px 24px rgba(0,0,0,0.5)';
  } else {
    nav.style.boxShadow = 'none';
  }
});
