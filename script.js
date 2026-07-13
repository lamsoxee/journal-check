// Load data
let allJournals = [];
let filteredJournals = [];
let currentPage = 1;
const journalsPerPage = 9;

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchInputMobile = document.getElementById('searchInputMobile');
const sintaFilter = document.getElementById('sintaFilter');
const apcFilter = document.getElementById('apcFilter');
const loaFilter = document.getElementById('loaFilter');
const frequencyFilter = document.getElementById('frequencyFilter');
const sortFilter = document.getElementById('sortFilter');
const resetFiltersBtn = document.getElementById('resetFilters');
const journalsList = document.getElementById('journalsList');
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeIcon = document.getElementById('darkModeIcon');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const pageNumbers = document.getElementById('pageNumbers');

// Load journals
fetch('data/journals.json')
  .then(r => r.json())
  .then(data => {
    allJournals = data;
    filteredJournals = [...data];
    updateStats();
    renderJournals();
    renderPagination();
    loadBookmarks();
  })
  .catch(err => {
    console.error('Error:', err);
    journalsList.innerHTML = '<p class="col-span-full text-center py-12 text-red-500">Gagal memuat data jurnal.</p>';
  });

// Update stats
function updateStats() {
  document.getElementById('totalJournals').textContent = allJournals.length;
  document.getElementById('freeJournals').textContent = allJournals.filter(j => j.apc === 0).length;
  document.getElementById('sinta1Count').textContent = allJournals.filter(j => j.sintaLevel === 1).length;
  document.getElementById('sinta2Count').textContent = allJournals.filter(j => j.sintaLevel === 2).length;
}

// Dark mode
darkModeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  darkModeIcon.innerHTML = isDark
    ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />'
    : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />';
});

// Format helpers
function formatAPC(apc) {
  if (apc === null || apc === undefined) return 'Tidak Diketahui';
  if (apc === 0) return 'Gratis';
  return `Rp ${apc.toLocaleString('id-ID')}`;
}

function getSintaBadgeClass(level) {
  return `badge-sinta-${level}` || 'bg-gray-500';
}

// Render journals
function renderJournals() {
  const start = (currentPage - 1) * journalsPerPage;
  const end = start + journalsPerPage;
  const journals = filteredJournals.slice(start, end);

  document.getElementById('resultCount').textContent = filteredJournals.length;
  journalsList.innerHTML = '';

  if (journals.length === 0) {
    journalsList.innerHTML = '<p class="col-span-full text-center py-12 text-gray-500 dark:text-gray-400">Tidak ada jurnal yang sesuai filter.</p>';
    return;
  }

  journals.forEach(j => {
    const isBookmarked = JSON.parse(localStorage.getItem('bookmarkedJournals') || '[]').includes(j.id);
    const card = document.createElement('div');
    card.className = 'bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-sm card-hover border border-gray-100 dark:border-dark-700';
    
    card.innerHTML = `
      <div class="flex justify-between items-start mb-3">
        <h3 class="text-lg font-bold text-gray-900 dark:text-white leading-tight flex-1 mr-2">${j.title}</h3>
        <button class="bookmark-btn ${isBookmarked ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-600'} hover:text-yellow-500 transition-colors" data-id="${j.id}">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="${isBookmarked ? 'currentColor' : 'none'}" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
          </svg>
        </button>
      </div>
      
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">${j.description || 'Deskripsi tidak tersedia'}</p>
      
      <div class="flex flex-wrap gap-2 mb-4">
        <span class="px-3 py-1 ${getSintaBadgeClass(j.sintaLevel)} text-white text-xs font-semibold rounded-full">SINTA ${j.sintaLevel}</span>
        <span class="px-3 py-1 ${j.apc === 0 ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'} text-xs font-medium rounded-full">${formatAPC(j.apc)}</span>
        <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-medium rounded-full">${j.loaTime}</span>
      </div>
      
      ${j.scope && j.scope.length > 0 ? `
        <div class="mb-4">
          <div class="flex flex-wrap gap-1">
            ${j.scope.slice(0, 4).map(s => `<span class="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-xs text-gray-600 dark:text-gray-400 rounded-md">${s}</span>`).join('')}
            ${j.scope.length > 4 ? `<span class="px-2 py-1 text-xs text-gray-500">+${j.scope.length - 4}</span>` : ''}
          </div>
        </div>
      ` : ''}
      
      <div class="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-dark-700">
        <div class="text-xs text-gray-500 dark:text-gray-400">
          ${j.e_issn ? `<span>e-ISSN: ${j.e_issn}</span>` : ''}
          ${j.frequency ? `<span class="ml-2">• ${j.frequency}</span>` : ''}
        </div>
        <a href="${j.journal_url || '#'}" target="_blank" rel="noopener" class="text-sm font-medium text-primary-600 dark:text-primary-500 hover:text-primary-700 flex items-center gap-1">
          Kunjungi
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
        </a>
      </div>
    `;
    journalsList.appendChild(card);
  });

  document.querySelectorAll('.bookmark-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      toggleBookmark(parseInt(this.dataset.id));
    });
  });
}

// Toggle bookmark
function toggleBookmark(id) {
  let bookmarks = JSON.parse(localStorage.getItem('bookmarkedJournals') || '[]');
  const idx = bookmarks.indexOf(id);
  idx > -1 ? bookmarks.splice(idx, 1) : bookmarks.push(id);
  localStorage.setItem('bookmarkedJournals', JSON.stringify(bookmarks));
  renderJournals();
  updateBookmarkCount();
}

function updateBookmarkCount() {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarkedJournals') || '[]');
  document.getElementById('bookmarkCount').textContent = bookmarks.length;
}

// Show bookmarks modal
let showingBookmarks = false;
document.getElementById('showBookmarksBtn').addEventListener('click', () => {
  if (showingBookmarks) {
    // Return to normal view
    showingBookmarks = false;
    filteredJournals = [...allJournals];
    document.getElementById('showBookmarksBtn').classList.remove('ring-4', 'ring-yellow-300');
  } else {
    // Show only bookmarks
    showingBookmarks = true;
    const bookmarks = JSON.parse(localStorage.getItem('bookmarkedJournals') || '[]');
    filteredJournals = allJournals.filter(j => bookmarks.includes(j.id));
    document.getElementById('showBookmarksBtn').classList.add('ring-4', 'ring-yellow-300');
  }
  currentPage = 1;
  renderJournals();
  renderPagination();
});

function loadBookmarks() {
  updateBookmarkCount();
}

// Filter
function filterJournals() {
  const search = (searchInput.value || searchInputMobile?.value || '').toLowerCase();
  const sinta = sintaFilter.value;
  const apc = apcFilter.value;
  const loa = loaFilter.value;
  const freq = frequencyFilter.value;

  filteredJournals = allJournals.filter(j => {
    const matchSearch = !search || j.title.toLowerCase().includes(search) || (j.scope && j.scope.some(s => s.toLowerCase().includes(search)));
    const matchSinta = !sinta || j.sintaLevel === parseInt(sinta);
    
    let matchAPC = true;
    if (apc) {
      if (apc === '0') matchAPC = j.apc === 0;
      else {
        const [min, max] = apc.split('-').map(Number);
        matchAPC = max ? (j.apc >= min && j.apc <= max) : j.apc >= min;
      }
    }
    
    const matchLOA = !loa || j.loaTime === loa + ' minggu';
    const matchFreq = !freq || j.frequency === freq;
    
    return matchSearch && matchSinta && matchAPC && matchLOA && matchFreq;
  });

  // Sort
  const [field, dir] = sortFilter.value.split('-');
  filteredJournals.sort((a, b) => {
    let va, vb;
    if (field === 'name') { va = a.title; vb = b.title; }
    else if (field === 'sinta') { va = a.sintaLevel; vb = b.sintaLevel; }
    else if (field === 'apc') { va = a.apc || 0; vb = b.apc || 0; }
    
    if (typeof va === 'string') return dir === 'asc' ? va.localeCompare(vb) : vb.localeCompare(va);
    return dir === 'asc' ? va - vb : vb - va;
  });

  currentPage = 1;
  renderJournals();
  renderPagination();
}

// Event listeners
[searchInput, searchInputMobile].forEach(el => el?.addEventListener('input', filterJournals));
[sintaFilter, apcFilter, loaFilter, frequencyFilter, sortFilter].forEach(el => el.addEventListener('change', filterJournals));

resetFiltersBtn.addEventListener('click', () => {
  searchInput.value = '';
  if (searchInputMobile) searchInputMobile.value = '';
  sintaFilter.value = '';
  apcFilter.value = '';
  loaFilter.value = '';
  frequencyFilter.value = '';
  sortFilter.value = 'name-asc';
  filterJournals();
});

// Pagination
function renderPagination() {
  const total = Math.ceil(filteredJournals.length / journalsPerPage);
  prevPageBtn.disabled = currentPage === 1;
  nextPageBtn.disabled = currentPage === total;
  
  pageNumbers.innerHTML = '';
  for (let i = 1; i <= total; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.className = `px-4 py-2 rounded-xl font-medium transition-colors ${i === currentPage ? 'bg-primary-600 text-white' : 'bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700'}`;
    btn.addEventListener('click', () => { currentPage = i; renderJournals(); renderPagination(); window.scrollTo({ top: 400, behavior: 'smooth' }); });
    pageNumbers.appendChild(btn);
  }
}

prevPageBtn.addEventListener('click', () => { if (currentPage > 1) { currentPage--; renderJournals(); renderPagination(); } });
nextPageBtn.addEventListener('click', () => { if (currentPage < Math.ceil(filteredJournals.length / journalsPerPage)) { currentPage++; renderJournals(); renderPagination(); } });
