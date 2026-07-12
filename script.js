// Data jurnal (embedded langsung)
const journals = [
  {
    "title": "JURNAL PENDIDIKAN IPA INDONESIA",
    "sinta_level": "S1",
    "apc": "Gratis",
    "loa_time": "2-4 minggu",
    "website_url": "https://journal.unnes.ac.id/nju/index.php/jpii",
    "scope": "Education",
    "publisher": "Universitas Negeri Semarang",
    "rating": 4.5,
    "bookmarked": false
  },
  // ... 29 jurnal lainnya
];

// Load bookmarks dan ratings dari localStorage
function loadLocalData() {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const ratings = JSON.parse(localStorage.getItem('ratings')) || {};
    
    journals.forEach(journal => {
        journal.bookmarked = bookmarks.includes(journal.title);
        journal.rating = ratings[journal.title] || journal.rating || 0;
    });
}

// Save bookmarks dan ratings ke localStorage
function saveLocalData() {
    const bookmarks = journals.filter(j => j.bookmarked).map(j => j.title);
    const ratings = {};
    journals.forEach(j => {
        if (j.rating) ratings[j.title] = j.rating;
    });
    
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    localStorage.setItem('ratings', JSON.stringify(ratings));
}

// Render jurnal ke HTML
function renderJournals(journalsToRender) {
    const journalList = document.getElementById('journal-list');
    journalList.innerHTML = '';
    
    journalsToRender.forEach(journal => {
        const journalElement = document.createElement('div');
        journalElement.className = 'journal-card';
        journalElement.innerHTML = `
            <div class="journal-header">
                <h3>${journal.title}</h3>
                <span class="sinta-badge sinta-${journal.sinta_level}">${journal.sinta_level}</span>
            </div>
            <div class="journal-body">
                <p><strong>Bidang:</strong> ${journal.scope || 'Tidak Diketahui'}</p>
                <p><strong>Biaya:</strong> <span class="apc-${journal.apc.includes('Gratis') ? 'free' : 'paid'}">${journal.apc}</span></p>
                <p><strong>LOA Time:</strong> ${journal.loa_time || 'Tidak Diketahui'}</p>
                <div class="rating-container">
                    <strong>Rating:</strong>
                    <div class="stars" data-title="${journal.title}">
                        ${[1,2,3,4,5].map(i => 
                            `<span class="star ${i <= Math.round(journal.rating) ? 'filled' : ''}" data-rating="${i}">★</span>`
                        ).join('')}
                    </div>
                    <span class="rating-value">${journal.rating.toFixed(1)}</span>
                </div>
            </div>
            <div class="journal-footer">
                <a href="${journal.website_url}" target="_blank" class="btn">🔗 Website</a>
                <button class="btn favorite ${journal.bookmarked ? 'bookmarked' : ''}" data-title="${journal.title}">
                    ${journal.bookmarked ? '❤️ Bookmarked' : '♡ Bookmark'}
                </button>
            </div>
        `;
        journalList.appendChild(journalElement);
    });
    
    setupEventListeners();
}

// Setup event listeners
function setupEventListeners() {
    // Filter events
    document.getElementById('sinta-level')?.addEventListener('change', filterJournals);
    document.getElementById('apc')?.addEventListener('change', filterJournals);
    document.getElementById('loa-time')?.addEventListener('change', filterJournals);
    document.getElementById('search')?.addEventListener('input', filterJournals);
    
    // Tombol Cari
    document.getElementById('search-btn')?.addEventListener('click', () => {
        filterJournals();
        window.location.href = '/journals.html';
    });
    
    // Tombol Journals di navbar
    document.querySelectorAll('.nav-links a[href="/"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = '/journals.html';
        });
    });
    
    // Tombol CTA
    document.getElementById('cta-btn')?.addEventListener('click', () => {
        window.location.href = '/journals.html';
    });
    
    // Stars rating
    document.querySelectorAll('.stars').forEach(starContainer => {
        starContainer.querySelectorAll('.star').forEach(star => {
            star.addEventListener('click', (e) => {
                const title = starContainer.getAttribute('data-title');
                const rating = parseInt(star.getAttribute('data-rating'));
                const journal = journals.find(j => j.title === title);
                if (journal) {
                    journal.rating = rating;
                    saveLocalData();
                    renderJournals(journals);
                }
            });
        });
    });
    
    // Bookmark
    document.querySelectorAll('.favorite').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const title = btn.getAttribute('data-title');
            const journal = journals.find(j => j.title === title);
            if (journal) {
                journal.bookmarked = !journal.bookmarked;
                saveLocalData();
                renderJournals(journals);
            }
        });
    });
}

// Filter jurnal
function filterJournals() {
    const sintaLevel = document.getElementById('sinta-level')?.value || 'all';
    const apc = document.getElementById('apc')?.value || 'all';
    const loaTime = document.getElementById('loa-time')?.value || 'all';
    const searchTerm = document.getElementById('search')?.value.toLowerCase() || '';
    
    const filtered = journals.filter(journal => {
        return (sintaLevel === 'all' || journal.sinta_level === sintaLevel) &&
               (apc === 'all' || journal.apc.includes(apc)) &&
               (loaTime === 'all' || (journal.loa_time && journal.loa_time.includes(loaTime))) &&
               (journal.title.toLowerCase().includes(searchTerm) || 
                (journal.scope && journal.scope.toLowerCase().includes(searchTerm)));
    });
    
    renderJournals(filtered);
}

// Initialize
loadLocalData();
setupEventListeners();