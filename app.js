/* ═══════════════════════════════════════════════════════════════
   FLICKVAULT — app.js
   ───────────────────────────────────────────────────────────────
   HOW TO ADD A MOVIE:
   Copy one block below and paste it at the TOP of the array.
   Fill in your own title, poster, trailer and download links.
   The site updates instantly — no HTML/CSS changes needed.

   FIELDS:
     title    → Movie name (string)
     year     → Release year (number)
     genre    → Category label (string)
     rating   → e.g. "8.5/10" (string)
     desc     → Short description (string)
     poster   → Direct image URL  (use any image host)
     trailer  → YouTube EMBED URL  (use embed format below)
                  https://www.youtube.com/embed/VIDEO_ID
                  Leave "" if no trailer
     download → Direct download or Google Drive link
                  Leave "" if no download
═══════════════════════════════════════════════════════════════ */

// ┌────────────────────────────────────────────────────────────┐
// │  ★  ADD NEW MOVIES HERE — paste at the top of this array  │
// └────────────────────────────────────────────────────────────┘
const movies = [

  // ── 1 ───────────────────────────────────────────────────────
  {
    title:    "Inception",
    year:     2010,
    genre:    "Sci-Fi / Thriller",
    rating:   "8.8/10",
    desc:     "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    poster:   "https://picsum.photos/seed/inception/400/600",
    trailer:  "https://www.youtube.com/embed/YoHD9XEInc0",
    download: "https://drive.google.com/file/d/EXAMPLE_ID_1/view"
  },

  // ── 2 ───────────────────────────────────────────────────────
  {
    title:    "The Dark Knight",
    year:     2008,
    genre:    "Action / Crime",
    rating:   "9.0/10",
    desc:     "When the Joker wreaks havoc on Gotham, Batman must accept one of the greatest tests of his ability to fight injustice.",
    poster:   "https://picsum.photos/seed/darkknight2024/400/600",
    trailer:  "https://www.youtube.com/embed/EXeTwQWrcwY",
    download: "https://drive.google.com/file/d/EXAMPLE_ID_2/view"
  },

  // ── 3 ───────────────────────────────────────────────────────
  {
    title:    "Interstellar",
    year:     2014,
    genre:    "Sci-Fi / Drama",
    rating:   "8.7/10",
    desc:     "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    poster:   "https://picsum.photos/seed/interstellar/400/600",
    trailer:  "https://www.youtube.com/embed/zSWdZVtXT7E",
    download: "https://drive.google.com/file/d/EXAMPLE_ID_3/view"
  },

  // ── 4 ───────────────────────────────────────────────────────
  {
    title:    "Oppenheimer",
    year:     2023,
    genre:    "Drama / History",
    rating:   "8.9/10",
    desc:     "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during WWII.",
    poster:   "https://picsum.photos/seed/oppenheimer23/400/600",
    trailer:  "https://www.youtube.com/embed/uYPbbksJxIg",
    download: "https://drive.google.com/file/d/EXAMPLE_ID_4/view"
  },

  // ── 5 ───────────────────────────────────────────────────────
  {
    title:    "Dune: Part Two",
    year:     2024,
    genre:    "Sci-Fi / Adventure",
    rating:   "8.5/10",
    desc:     "Paul Atreides unites with Chani and the Fremen while seeking revenge against those who destroyed his family.",
    poster:   "https://picsum.photos/seed/dune2part/400/600",
    trailer:  "https://www.youtube.com/embed/Way9Dexny3w",
    download: "https://drive.google.com/file/d/EXAMPLE_ID_5/view"
  },

  // ── 6 ───────────────────────────────────────────────────────
  {
    title:    "Mad Max: Fury Road",
    year:     2015,
    genre:    "Action / Adventure",
    rating:   "8.1/10",
    desc:     "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler with the aid of a drifter named Max.",
    poster:   "https://picsum.photos/seed/madmaxfury/400/600",
    trailer:  "https://www.youtube.com/embed/hEJnMQG9ev8",
    download: "https://drive.google.com/file/d/EXAMPLE_ID_6/view"
  },

  // ── 7 ───────────────────────────────────────────────────────
  {
    title:    "Get Out",
    year:     2017,
    genre:    "Horror / Thriller",
    rating:   "7.7/10",
    desc:     "A young African-American visits his white girlfriend's parents for the weekend, where something sinister awaits.",
    poster:   "https://picsum.photos/seed/getoutfilm/400/600",
    trailer:  "https://www.youtube.com/embed/DzfpyUB60YY",
    download: "https://drive.google.com/file/d/EXAMPLE_ID_7/view"
  },

  // ── 8 ───────────────────────────────────────────────────────
  {
    title:    "Everything Everywhere All at Once",
    year:     2022,
    genre:    "Sci-Fi / Comedy",
    rating:   "7.8/10",
    desc:     "An aging Chinese immigrant is swept up in an insane adventure where she alone can save the world by exploring the multiverse.",
    poster:   "https://picsum.photos/seed/eeaao22/400/600",
    trailer:  "https://www.youtube.com/embed/wxN1T1uxQ2g",
    download: "https://drive.google.com/file/d/EXAMPLE_ID_8/view"
  },

  // ── 9 ───────────────────────────────────────────────────────
  {
    title:    "Top Gun: Maverick",
    year:     2022,
    genre:    "Action / Drama",
    rating:   "8.3/10",
    desc:     "After 30 years, Maverick is still pushing the envelope as a courageous test pilot, and is called to train a new generation.",
    poster:   "https://picsum.photos/seed/topgunmav/400/600",
    trailer:  "https://www.youtube.com/embed/qSqVVswa420",
    download: "https://drive.google.com/file/d/EXAMPLE_ID_9/view"
  },

  // ── 10 ──────────────────────────────────────────────────────
  {
    title:    "John Wick: Chapter 4",
    year:     2023,
    genre:    "Action / Thriller",
    rating:   "7.7/10",
    desc:     "John Wick uncovers a path to defeating the High Table, but before he can earn his freedom, he must face a new enemy.",
    poster:   "https://picsum.photos/seed/johnwick4/400/600",
    trailer:  "https://www.youtube.com/embed/qEVUtrk8_B4",
    download: "https://drive.google.com/file/d/EXAMPLE_ID_10/view"
  },

  // ── 11 ──────────────────────────────────────────────────────
  {
    title:    "The Shawshank Redemption",
    year:     1994,
    genre:    "Drama",
    rating:   "9.3/10",
    desc:     "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    poster:   "https://picsum.photos/seed/shawshank/400/600",
    trailer:  "https://www.youtube.com/embed/6hB3S9bIaco",
    download: "https://drive.google.com/file/d/EXAMPLE_ID_11/view"
  },

  // ── 12 ──────────────────────────────────────────────────────
  {
    title:    "Parasite",
    year:     2019,
    genre:    "Drama / Thriller",
    rating:   "8.5/10",
    desc:     "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Parks and the destitute Kims.",
    poster:   "https://picsum.photos/seed/parasitefilm/400/600",
    trailer:  "https://www.youtube.com/embed/5xH0HfJHsaY",
    download: "https://drive.google.com/file/d/EXAMPLE_ID_12/view"
  },

];
/* ─────────────────────────────────────────────────────────────
   END OF MOVIE ARRAY — add your movies above this line
───────────────────────────────────────────────────────────── */


// ═══════════════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════════════
let currentQuery   = "";   // active search string
let activeMovieIdx = -1;   // index of open modal


// ═══════════════════════════════════════════════════
//  INIT — runs when the page loads
// ═══════════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
  renderMovies(movies);
  updateStats(movies.length);
});


// ═══════════════════════════════════════════════════
//  RENDER FUNCTIONS
// ═══════════════════════════════════════════════════

/**
 * Renders an array of movies into the grid.
 * @param {Array} list - movies to display
 */
function renderMovies(list) {
  const grid       = document.getElementById("movieGrid");
  const emptyState = document.getElementById("emptyState");

  // Clear existing cards
  grid.innerHTML = "";

  if (list.length === 0) {
    grid.style.display    = "none";
    emptyState.style.display = "flex";
    return;
  }

  grid.style.display    = "grid";
  emptyState.style.display = "none";

  // Build a card for each movie
  list.forEach((movie, index) => {
    const card = createCard(movie, index);
    // Stagger the animation
    card.style.animationDelay = `${index * 0.04}s`;
    grid.appendChild(card);
  });
}

/**
 * Creates a single movie card DOM element.
 * @param {Object} movie
 * @param {number} index - position in the ORIGINAL movies array
 */
function createCard(movie, index) {
  // Find real index in the full movies array (needed for modal)
  const realIndex = movies.indexOf(movie);

  const card = document.createElement("div");
  card.className  = "movie-card";
  card.title      = movie.title;
  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");

  card.innerHTML = `
    <img
      class="card-img"
      src="${movie.poster}"
      alt="${movie.title} poster"
      loading="lazy"
      onerror="this.src='https://picsum.photos/seed/${encodeURIComponent(movie.title)}/400/600'"
    />
    <div class="card-overlay">
      <div class="card-title">${movie.title}</div>
      <div class="card-genre">${movie.genre} · ${movie.year}</div>
    </div>
    <div class="card-cta">
      <div class="cta-play">
        <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      </div>
      <span class="cta-label">Watch Trailer</span>
    </div>
  `;

  // Click & keyboard handlers
  card.addEventListener("click",   () => openModal(realIndex));
  card.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") openModal(realIndex); });

  return card;
}

/**
 * Updates the movie count stat in the hero and navbar.
 */
function updateStats(count) {
  document.getElementById("statCount").textContent = count;
  document.getElementById("movieCount").innerHTML  =
    `<strong>${count}</strong> movie${count !== 1 ? "s" : ""}`;
}


// ═══════════════════════════════════════════════════
//  SEARCH
// ═══════════════════════════════════════════════════

/**
 * Called on every keystroke in the search input.
 * @param {string} query
 */
function handleSearch(query) {
  currentQuery = query.trim().toLowerCase();

  const clearBtn  = document.getElementById("clearBtn");
  const resultsBar = document.getElementById("resultsBar");

  // Show/hide clear button
  clearBtn.classList.toggle("visible", currentQuery.length > 0);

  if (currentQuery === "") {
    // Reset to full list
    resultsBar.style.display = "none";
    renderMovies(movies);
    updateStats(movies.length);
    return;
  }

  // Filter movies — match title, genre, year, or desc
  const filtered = movies.filter((m) =>
    m.title.toLowerCase().includes(currentQuery) ||
    m.genre.toLowerCase().includes(currentQuery) ||
    String(m.year).includes(currentQuery) ||
    m.desc.toLowerCase().includes(currentQuery)
  );

  // Show results bar
  resultsBar.style.display = "flex";
  document.getElementById("resultsLabel").innerHTML =
    `<strong>${filtered.length}</strong> result${filtered.length !== 1 ? "s" : ""} for "<strong>${escapeHtml(query.trim())}</strong>"`;

  renderMovies(filtered);
  updateStats(filtered.length);
}

/**
 * Clears the search and restores full grid.
 */
function clearSearch() {
  const input = document.getElementById("searchInput");
  input.value = "";
  input.focus();
  handleSearch("");
}


// ═══════════════════════════════════════════════════
//  MODAL — open / close
// ═══════════════════════════════════════════════════

/**
 * Opens the movie modal for the given movies[] index.
 * @param {number} index
 */
function openModal(index) {
  const movie    = movies[index];
  if (!movie) return;
  activeMovieIdx = index;

  const modal    = document.getElementById("modal");
  const backdrop = document.getElementById("modalBackdrop");

  // ── Populate fields ──────────────────────────────
  document.getElementById("modalTitle").textContent = movie.title;

  // Meta chips
  document.getElementById("modalMeta").innerHTML = [
    movie.year   ? `<span>${movie.year}</span>`   : "",
    movie.genre  ? `<span>${movie.genre}</span>`  : "",
    movie.rating ? `<span>⭐ ${movie.rating}</span>` : "",
  ].join("");

  document.getElementById("modalDesc").textContent =
    movie.desc || "No description available.";

  // ── Trailer ──────────────────────────────────────
  const videoWrap   = document.getElementById("modalVideo");
  const placeholder = document.getElementById("videoPlaceholder");

  if (movie.trailer && movie.trailer.trim() !== "") {
    // Build safe embed URL (auto-play, muted so browsers allow it)
    const embedUrl = movie.trailer.includes("?")
      ? movie.trailer + "&autoplay=1&mute=1&rel=0"
      : movie.trailer + "?autoplay=1&mute=1&rel=0";

    videoWrap.innerHTML = `
      <iframe
        src="${embedUrl}"
        title="${escapeHtml(movie.title)} trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>`;
    videoWrap.style.display    = "block";
    placeholder.style.display  = "none";
  } else {
    // No trailer — show placeholder
    videoWrap.innerHTML        = "";
    videoWrap.style.display    = "none";
    placeholder.style.display  = "flex";
  }

  // ── Download button ───────────────────────────────
  const dlBtn = document.getElementById("downloadBtn");
  if (movie.download && movie.download.trim() !== "") {
    dlBtn.href = movie.download;
    dlBtn.classList.remove("disabled");
    dlBtn.setAttribute("aria-disabled", "false");
  } else {
    dlBtn.href = "#";
    dlBtn.classList.add("disabled");
    dlBtn.setAttribute("aria-disabled", "true");
  }

  // ── Animate in ───────────────────────────────────
  backdrop.classList.add("active");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

/**
 * Closes the modal and stops the trailer video.
 */
function closeModal() {
  const modal    = document.getElementById("modal");
  const backdrop = document.getElementById("modalBackdrop");

  // Stop video by clearing iframe src
  document.getElementById("modalVideo").innerHTML = "";

  modal.classList.remove("active");
  backdrop.classList.remove("active");
  document.body.style.overflow = "";
  activeMovieIdx = -1;
}

// Close modal on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && activeMovieIdx !== -1) closeModal();
});


// ═══════════════════════════════════════════════════
//  UTILITY
// ═══════════════════════════════════════════════════

/**
 * Escapes HTML special chars to prevent XSS in innerHTML.
 */
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
