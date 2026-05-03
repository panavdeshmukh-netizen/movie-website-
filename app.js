/* ═══════════════════════════════════════════════════════════════
   FLICKVAULT — app.js
   ───────────────────────────────────────────────────────────────

   ★ MOVIES ADD KARNE KA TARIKA:
   ─────────────────────────────
   Neeche movies[] array mein ek naya object paste karo:

   {
     title:    "Movie Name",
     year:     2024,
     genre:    "Action",
     lang:     "Hindi",
     rating:   "8.5/10",
     desc:     "Short description",
     poster:   "https://image-link.com/poster.jpg",
     trailer:  "https://www.youtube.com/embed/VIDEO_ID",
     download: "https://your-download-link.com"
   }

   ★ AD SETTINGS:
   ──────────────
   AD_SKIP_SECONDS  → Kitne second baad skip button aayega (default: 5)
   ADS_ENABLED      → false karo agar ads temporarily band karni ho

═══════════════════════════════════════════════════════════════ */


/* ───────────────────────────────────────────────────────────────
   ★ AD CONFIGURATION — yahan change karo
─────────────────────────────────────────────────────────────── */
const AD_SKIP_SECONDS = 5;    // Pre-roll ad skip timer (seconds)
const ADS_ENABLED     = true; // false = pre-roll ad nahi dikhegi


/* ───────────────────────────────────────────────────────────────
   ★ MOVIES ARRAY — yahan naye movies paste karo (upar wali format mein)
─────────────────────────────────────────────────────────────── */
const movies = [

  {
    title:    "Inception",
    year:     2010,
    genre:    "Sci-Fi / Thriller",
    lang:     "English",
    rating:   "8.8/10",
    desc:     "A thief who steals secrets through dreams is given one last job — to plant an idea inside someone's mind.",
    poster:   "https://picsum.photos/seed/inception99/400/600",
    trailer:  "https://www.youtube.com/embed/YoHD9XEInc0",
    download: ""
  },
  {
    title:    "The Dark Knight",
    year:     2008,
    genre:    "Action / Crime",
    lang:     "English",
    rating:   "9.0/10",
    desc:     "Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos.",
    poster:   "https://picsum.photos/seed/darkknightfv/400/600",
    trailer:  "https://www.youtube.com/embed/EXeTwQWrcwY",
    download: ""
  },
  {
    title:    "Interstellar",
    year:     2014,
    genre:    "Sci-Fi / Drama",
    lang:     "English",
    rating:   "8.7/10",
    desc:     "Explorers travel through a wormhole in space to ensure humanity's survival.",
    poster:   "https://picsum.photos/seed/interstellarfv/400/600",
    trailer:  "https://www.youtube.com/embed/zSWdZVtXT7E",
    download: ""
  },
  {
    title:    "Oppenheimer",
    year:     2023,
    genre:    "Drama / History",
    lang:     "English",
    rating:   "8.9/10",
    desc:     "The story of J. Robert Oppenheimer and his role in creating the atomic bomb.",
    poster:   "https://picsum.photos/seed/oppenhfv/400/600",
    trailer:  "https://www.youtube.com/embed/uYPbbksJxIg",
    download: ""
  },
  {
    title:    "Dune: Part Two",
    year:     2024,
    genre:    "Sci-Fi / Adventure",
    lang:     "English",
    rating:   "8.5/10",
    desc:     "Paul Atreides unites with the Fremen to seek revenge and prevent a terrible future.",
    poster:   "https://picsum.photos/seed/dune2fv/400/600",
    trailer:  "https://www.youtube.com/embed/Way9Dexny3w",
    download: ""
  },
  {
    title:    "Top Gun: Maverick",
    year:     2022,
    genre:    "Action / Drama",
    lang:     "English",
    rating:   "8.3/10",
    desc:     "After 30 years Maverick trains a new generation of Top Gun graduates for a special mission.",
    poster:   "https://picsum.photos/seed/topgunfv/400/600",
    trailer:  "https://www.youtube.com/embed/qSqVVswa420",
    download: ""
  },
  {
    title:    "Pushpa 2: The Rule",
    year:     2024,
    genre:    "Action / Drama",
    lang:     "Hindi",
    rating:   "8.0/10",
    desc:     "Pushpa Raj expands his smuggling empire while facing a powerful adversary.",
    poster:   "https://picsum.photos/seed/pushpa2fv/400/600",
    trailer:  "https://www.youtube.com/embed/cTQm3KdVBGg",
    download: ""
  },
  {
    title:    "KGF Chapter 2",
    year:     2022,
    genre:    "Action / Thriller",
    lang:     "Hindi",
    rating:   "8.2/10",
    desc:     "Rocky's blood-soaked rise to power continues as enemies close in from all directions.",
    poster:   "https://picsum.photos/seed/kgf2fv/400/600",
    trailer:  "https://www.youtube.com/embed/l8HypLMZrQs",
    download: ""
  },
  {
    title:    "RRR",
    year:     2022,
    genre:    "Action / Period",
    lang:     "Hindi",
    rating:   "7.9/10",
    desc:     "A fictional tale of two Indian revolutionaries on their journey away from home.",
    poster:   "https://picsum.photos/seed/rrrfv/400/600",
    trailer:  "https://www.youtube.com/embed/f_vbAtFSEc0",
    download: ""
  },
  {
    title:    "John Wick 4",
    year:     2023,
    genre:    "Action / Thriller",
    lang:     "English",
    rating:   "7.7/10",
    desc:     "John Wick uncovers a path to defeating the High Table but faces a new deadly enemy.",
    poster:   "https://picsum.photos/seed/jw4fv/400/600",
    trailer:  "https://www.youtube.com/embed/qEVUtrk8_B4",
    download: ""
  },
  {
    title:    "Parasite",
    year:     2019,
    genre:    "Drama / Thriller",
    lang:     "Korean",
    rating:   "8.5/10",
    desc:     "Class discrimination threatens a newly formed relationship between a wealthy and poor family.",
    poster:   "https://picsum.photos/seed/parasitefv/400/600",
    trailer:  "https://www.youtube.com/embed/5xH0HfJHsaY",
    download: ""
  },
  {
    title:    "Animal",
    year:     2023,
    genre:    "Action / Drama",
    lang:     "Hindi",
    rating:   "6.5/10",
    desc:     "A son's obsessive love for his father spirals into a violent, passionate saga.",
    poster:   "https://picsum.photos/seed/animalfv/400/600",
    trailer:  "https://www.youtube.com/embed/aDlhOFkHX5s",
    download: ""
  },

];
/* ─── MOVIES ARRAY KHATAM ─────────────────────────────────── */


/* ═══════════════════════════════════════════════════════════════
   STATE & STORAGE
═══════════════════════════════════════════════════════════════ */
let addedVideos   = JSON.parse(localStorage.getItem("fv_added") || "[]");
let searchQuery   = "";
let pendingMovie  = null;  // movie waiting to play after ad
let adTimer       = null;

/* ═══════════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  renderGrid(getAllItems());
  updateCounts();
  refreshAddedList();
});

function getAllItems() {
  return [...movies, ...addedVideos];
}

/* ═══════════════════════════════════════════════════════════════
   RENDER GRID
═══════════════════════════════════════════════════════════════ */
function renderGrid(list) {
  const grid  = document.getElementById("movieGrid");
  const empty = document.getElementById("emptyState");
  grid.innerHTML = "";

  if (!list.length) {
    grid.style.display  = "none";
    empty.style.display = "flex";
    return;
  }
  grid.style.display  = "grid";
  empty.style.display = "none";

  const all = getAllItems();

  list.forEach((item, i) => {
    const realIdx = all.indexOf(item);
    const isYT    = !!item._yt;

    const card    = document.createElement("div");
    card.className = "movie-card";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.style.animationDelay = `${i * 0.04}s`;

    card.innerHTML = `
      ${isYT ? '<span class="card-yt-badge">▶ YouTube</span>' : ""}
      <img class="card-img"
        src="${item.poster}"
        alt="${esc(item.title)}"
        loading="lazy"
        onerror="this.src='https://picsum.photos/seed/${encodeURIComponent(item.title)}fv/400/600'"
      />
      <div class="card-bottom">
        <div class="card-title">${esc(item.title)}</div>
        <div class="card-sub">${item.genre || ""} · ${item.year || ""}</div>
      </div>
      <div class="card-hover">
        <div class="card-play-btn">
          <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </div>
        <span class="card-play-label">${isYT ? "Watch" : "Watch Trailer"}</span>
      </div>
    `;

    card.addEventListener("click",   () => onCardClick(realIdx));
    card.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") onCardClick(realIdx); });
    grid.appendChild(card);
  });
}

function updateCounts() {
  const total = getAllItems().length;
  document.getElementById("statCount").textContent = total;
  document.getElementById("movieCount").innerHTML  =
    `<strong>${total}</strong> videos`;
}

/* ═══════════════════════════════════════════════════════════════
   SEARCH
═══════════════════════════════════════════════════════════════ */
function handleSearch(val) {
  searchQuery = val.trim().toLowerCase();
  const clearBtn  = document.getElementById("clearBtn");
  const resultsBar = document.getElementById("resultsBar");

  clearBtn.classList.toggle("show", searchQuery.length > 0);

  if (!searchQuery) {
    resultsBar.style.display = "none";
    renderGrid(getAllItems());
    updateCounts();
    return;
  }

  const all      = getAllItems();
  const filtered = all.filter(m =>
    (m.title  || "").toLowerCase().includes(searchQuery) ||
    (m.genre  || "").toLowerCase().includes(searchQuery) ||
    (m.lang   || "").toLowerCase().includes(searchQuery) ||
    (m.desc   || "").toLowerCase().includes(searchQuery) ||
    String(m.year || "").includes(searchQuery)
  );

  resultsBar.style.display = "flex";
  resultsBar.innerHTML = `
    <span><strong>${filtered.length}</strong> result${filtered.length !== 1 ? "s" : ""}
    for "<strong>${esc(val.trim())}</strong>"</span>
    <button onclick="clearSearch()">✕ Clear Search</button>
  `;

  renderGrid(filtered);
  updateCounts();
}

function clearSearch() {
  const inp = document.getElementById("searchInput");
  inp.value = "";
  inp.focus();
  handleSearch("");
}

/* ═══════════════════════════════════════════════════════════════
   CARD CLICK → PRE-ROLL AD → VIDEO MODAL
═══════════════════════════════════════════════════════════════ */
function onCardClick(realIdx) {
  const movie = getAllItems()[realIdx];
  if (!movie) return;

  if (ADS_ENABLED) {
    pendingMovie = movie;
    showPreroll();
  } else {
    openModal(movie);
  }
}

/* ── PRE-ROLL AD ───────────────────────────────── */
function showPreroll() {
  const box      = document.getElementById("prerollBox");
  const backdrop = document.getElementById("prerollBackdrop");
  const skipBtn  = document.getElementById("prerollSkip");
  const timerEl  = document.getElementById("prerollTimer");
  const bar      = document.getElementById("prerollBar");

  box.style.display = "block";
  backdrop.classList.add("show");
  document.body.style.overflow = "hidden";

  skipBtn.disabled          = true;
  timerEl.textContent       = AD_SKIP_SECONDS;
  bar.style.transition      = "none";
  bar.style.width           = "0%";

  // Start progress bar animation
  requestAnimationFrame(() => {
    bar.style.transition = `width ${AD_SKIP_SECONDS}s linear`;
    bar.style.width      = "100%";
  });

  let remaining = AD_SKIP_SECONDS;
  adTimer = setInterval(() => {
    remaining--;
    timerEl.textContent = remaining;
    if (remaining <= 0) {
      clearInterval(adTimer);
      skipBtn.disabled    = false;
      timerEl.textContent = "0";
      skipBtn.textContent = "Skip Ad ▶";
    }
  }, 1000);
}

function skipAd() {
  clearInterval(adTimer);
  const box      = document.getElementById("prerollBox");
  const backdrop = document.getElementById("prerollBackdrop");

  box.style.display = "none";
  backdrop.classList.remove("show");
  document.body.style.overflow = "";

  if (pendingMovie) {
    openModal(pendingMovie);
    pendingMovie = null;
  }
}

/* ── VIDEO MODAL ───────────────────────────────── */
function openModal(movie) {
  const modal    = document.getElementById("modal");
  const backdrop = document.getElementById("modalBackdrop");
  const isYT     = !!movie._yt;

  // Badges
  document.getElementById("modalYtBadge").style.display    = isYT ? "inline-block" : "none";
  document.getElementById("modalMovieBadge").style.display = isYT ? "none" : "inline-block";

  // Title & meta
  document.getElementById("modalTitle").textContent = movie.title;
  document.getElementById("modalDesc").textContent  = movie.desc || "No description available.";

  const chips = [movie.year, movie.genre, movie.lang, movie.rating]
    .filter(Boolean)
    .map(v => `<span>${esc(String(v))}</span>`)
    .join("");
  document.getElementById("modalChips").innerHTML = chips;

  // Video
  const vidWrap = document.getElementById("modalVideo");
  const noVid   = document.getElementById("modalNoVideo");

  if (movie.trailer) {
    const src = movie.trailer.includes("?")
      ? `${movie.trailer}&autoplay=1&mute=0&rel=0`
      : `${movie.trailer}?autoplay=1&rel=0`;
    vidWrap.innerHTML = `
      <iframe
        src="${src}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>`;
    vidWrap.style.display = "block";
    noVid.style.display   = "none";
  } else {
    vidWrap.innerHTML     = "";
    vidWrap.style.display = "none";
    noVid.style.display   = "flex";
  }

  // Download button
  const dlBtn = document.getElementById("dlBtn");
  if (movie.download) {
    dlBtn.href = movie.download;
    dlBtn.classList.remove("off");
  } else {
    dlBtn.href = "#";
    dlBtn.classList.add("off");
  }

  backdrop.classList.add("show");
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modalVideo").innerHTML = "";
  document.getElementById("modal").classList.remove("show");
  document.getElementById("modalBackdrop").classList.remove("show");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeModal();
    skipAd();
  }
});

/* ═══════════════════════════════════════════════════════════════
   ADD VIDEO PANEL
═══════════════════════════════════════════════════════════════ */
function toggleAddPanel() {
  document.getElementById("addPanel").classList.toggle("open");
}

function scrollToAddPanel() {
  const panel = document.getElementById("addPanel");
  panel.classList.add("open");
  panel.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ── YouTube ID extract ─────────────────────────── */
function getYTId(url) {
  const patterns = [
    /[?&]v=([a-zA-Z0-9_-]{11})/,
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /\/embed\/([a-zA-Z0-9_-]{11})/,
    /\/shorts\/([a-zA-Z0-9_-]{11})/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

/* ── Live preview while typing ─────────────────── */
function livePreview() {
  const url       = document.getElementById("yt-url").value.trim();
  const titleVal  = document.getElementById("yt-title").value.trim();
  const genreVal  = document.getElementById("yt-genre").value.trim();
  const yearVal   = document.getElementById("yt-year").value.trim();
  const langVal   = document.getElementById("yt-lang").value.trim();
  const thumbDiv  = document.getElementById("previewThumb");
  const titleEl   = document.getElementById("previewTitle");
  const metaEl    = document.getElementById("previewMeta");
  const id        = getYTId(url);

  titleEl.textContent = titleVal || "Video title yahan aayega";
  metaEl.textContent  = [genreVal, yearVal, langVal].filter(Boolean).join(" · ") || "Genre · Year · Language";

  if (id) {
    thumbDiv.innerHTML = `<img src="https://img.youtube.com/vi/${id}/mqdefault.jpg" alt="thumb" style="width:100%;height:100%;object-fit:cover"/>`;
  } else {
    thumbDiv.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
           width="36" height="36" opacity=".3">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
      </svg>
      <span>Enter YouTube URL</span>`;
  }
}

/* ── Add video ──────────────────────────────────── */
function addVideo() {
  const msgEl  = document.getElementById("formMsg");
  msgEl.className = "form-msg";
  msgEl.textContent = "";

  const title = document.getElementById("yt-title").value.trim();
  const url   = document.getElementById("yt-url").value.trim();
  const genre = document.getElementById("yt-genre").value.trim();
  const year  = document.getElementById("yt-year").value.trim();
  const lang  = document.getElementById("yt-lang").value.trim();
  const desc  = document.getElementById("yt-desc").value.trim();

  if (!title) { msgEl.textContent = "⚠ Title dalna zaroori hai."; return; }
  if (!url)   { msgEl.textContent = "⚠ YouTube link dalna zaroori hai."; return; }

  const id = getYTId(url);
  if (!id)  { msgEl.textContent = "⚠ Invalid YouTube link. youtube.com/watch?v=... ya youtu.be/... format use karo."; return; }

  const dup = addedVideos.some(v => getYTId(v.trailer || "") === id);
  if (dup)  { msgEl.textContent = "⚠ Yeh video already add hai."; return; }

  const newVid = {
    title,
    year:     year ? parseInt(year) : new Date().getFullYear(),
    genre:    genre || "YouTube",
    lang:     lang  || "",
    rating:   "",
    desc:     desc  || "",
    poster:   `https://img.youtube.com/vi/${id}/mqdefault.jpg`,
    trailer:  `https://www.youtube.com/embed/${id}`,
    download: "",
    _yt:      true,
    _id:      id,
  };

  addedVideos.push(newVid);
  saveAdded();
  refreshAddedList();
  updateCounts();
  renderGrid(getAllItems());

  resetForm();

  msgEl.className   = "form-msg ok";
  msgEl.textContent = `✓ "${title}" collection mein add ho gaya!`;
  setTimeout(() => { msgEl.textContent = ""; msgEl.className = "form-msg"; }, 3500);
}

/* ── Reset form ─────────────────────────────────── */
function resetForm() {
  ["yt-title","yt-url","yt-genre","yt-year","yt-lang","yt-desc"]
    .forEach(id => { document.getElementById(id).value = ""; });
  livePreview();
}

/* ── Saved list ─────────────────────────────────── */
function refreshAddedList() {
  const listWrap  = document.getElementById("addedList");
  const itemsWrap = document.getElementById("addedItems");
  const countEl   = document.getElementById("addedCount");
  const badge     = document.getElementById("addedBadge");

  if (!addedVideos.length) {
    listWrap.style.display = "none";
    badge.classList.remove("show");
    return;
  }

  listWrap.style.display = "block";
  countEl.textContent    = addedVideos.length;
  badge.textContent      = addedVideos.length;
  badge.classList.add("show");

  itemsWrap.innerHTML = addedVideos.map((v, i) => `
    <div class="added-item">
      <img class="added-item-thumb"
           src="${v.poster}"
           alt="${esc(v.title)}"
           onerror="this.style.background='#222'"/>
      <div class="added-item-info">
        <div class="added-item-title">${esc(v.title)}</div>
        <div class="added-item-meta">${v.genre} · ${v.year}${v.lang ? " · "+v.lang : ""}</div>
      </div>
      <button class="added-item-del" onclick="removeVideo(${i})" title="Remove">✕</button>
    </div>
  `).join("");
}

function removeVideo(idx) {
  addedVideos.splice(idx, 1);
  saveAdded();
  refreshAddedList();
  updateCounts();
  renderGrid(getAllItems());
  if (searchQuery) handleSearch(document.getElementById("searchInput").value);
}

function removeAll() {
  if (!addedVideos.length) return;
  if (!confirm(`Saare ${addedVideos.length} added videos remove karo?`)) return;
  addedVideos = [];
  saveAdded();
  refreshAddedList();
  updateCounts();
  renderGrid(getAllItems());
}

function saveAdded() {
  localStorage.setItem("fv_added", JSON.stringify(addedVideos));
}

/* ═══════════════════════════════════════════════════════════════
   UTILITY
═══════════════════════════════════════════════════════════════ */
function esc(s) {
  return String(s)
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;");
}
