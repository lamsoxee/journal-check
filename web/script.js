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
  {
    "title": "INTERNATIONAL JOURNAL OF ELECTRICAL AND COMPUTER ENGINEERING",
    "sinta_level": "S1",
    "apc": "$50-$150",
    "loa_time": "1-2 minggu",
    "website_url": "http://ijece.iaescore.com",
    "scope": "Engineering, Science",
    "publisher": "Institute of Advanced Engineering and Science",
    "rating": 4.8,
    "bookmarked": false
  },
  {
    "title": "JURNAL ILMIAH ILMU TERAPAN UNIVERSITAS JAMBI",
    "sinta_level": "S1",
    "apc": "Gratis",
    "loa_time": "3-4 minggu",
    "website_url": "https://ejournal.unja.ac.id/JITU/index",
    "scope": "Education",
    "publisher": "LPPM Universitas Jambi",
    "rating": 4.2,
    "bookmarked": false
  },
  {
    "title": "JURNAL ILMIAH ISLAM FUTURA",
    "sinta_level": "S1",
    "apc": "Gratis",
    "loa_time": "4-6 minggu",
    "website_url": "https://jurnal.ar-raniry.ac.id/index.php/islamfutura",
    "scope": "Humanities, Religion",
    "publisher": "UIN Ar-Raniry Banda Aceh",
    "rating": 4.0,
    "bookmarked": false
  },
  {
    "title": "NAZHRUNA: JURNAL PENDIDIKAN ISLAM",
    "sinta_level": "S1",
    "apc": "Gratis",
    "loa_time": "2-3 minggu",
    "website_url": "https://e-journal.metrouniv.ac.id/index.php/nazhruna",
    "scope": "Religion",
    "publisher": "Universitas KH. Abdul Chalim",
    "rating": 4.3,
    "bookmarked": false
  },
  {
    "title": "JURNAL PENDIDIKAN DAN PEMBELAJARAN",
    "sinta_level": "S2",
    "apc": "Gratis",
    "loa_time": "4-8 minggu",
    "website_url": "https://journal.um.ac.id/index.php/jpp",
    "scope": "Education",
    "publisher": "Universitas Negeri Malang",
    "rating": 4.1,
    "bookmarked": false
  },
  {
    "title": "JURNAL PENDIDIKAN BIOLOGI INDONESIA",
    "sinta_level": "S2",
    "apc": "Gratis",
    "loa_time": "3-5 minggu",
    "website_url": "https://journal.um.ac.id/index.php/jpbi",
    "scope": "Biology, Education",
    "publisher": "Universitas Negeri Malang",
    "rating": 4.6,
    "bookmarked": false
  },
  {
    "title": "JURNAL PENDIDIKAN FISIKA INDONESIA",
    "sinta_level": "S2",
    "apc": "Gratis",
    "loa_time": "2-4 minggu",
    "website_url": "https://journal.unnes.ac.id/nju/index.php/jpfi",
    "scope": "Physics, Education",
    "publisher": "Universitas Negeri Semarang",
    "rating": 4.4,
    "bookmarked": false
  },
  {
    "title": "JURNAL PENDIDIKAN MATEMATIKA",
    "sinta_level": "S2",
    "apc": "Gratis",
    "loa_time": "3-6 minggu",
    "website_url": "https://journal.um.ac.id/index.php/jpm",
    "scope": "Mathematics, Education",
    "publisher": "Universitas Negeri Malang",
    "rating": 4.0,
    "bookmarked": false
  },
  {
    "title": "JURNAL PENDIDIKAN TEKNIK ELEKTRO",
    "sinta_level": "S2",
    "apc": "Gratis",
    "loa_time": "4-8 minggu",
    "website_url": "https://journal.um.ac.id/index.php/jpte",
    "scope": "Engineering, Education",
    "publisher": "Universitas Negeri Malang",
    "rating": 3.9,
    "bookmarked": false
  },
  // 20 Jurnal Baru
  {
    "title": "Jurnal Pendidikan Kimia",
    "sinta_level": "S2",
    "apc": "Gratis",
    "loa_time": "3-5 minggu",
    "website_url": "https://journal.unnes.ac.id/nju/index.php/jpk",
    "scope": "Chemistry, Education",
    "publisher": "Universitas Negeri Semarang",
    "rating": 4.2,
    "bookmarked": false
  },
  {
    "title": "Jurnal Pendidikan Sejarah",
    "sinta_level": "S3",
    "apc": "Gratis",
    "loa_time": "4-6 minggu",
    "website_url": "https://journal.unnes.ac.id/nju/index.php/jps",
    "scope": "History, Education",
    "publisher": "Universitas Negeri Semarang",
    "rating": 4.0,
    "bookmarked": false
  },
  {
    "title": "Jurnal Pendidikan Bahasa Inggris",
    "sinta_level": "S2",
    "apc": "Gratis",
    "loa_time": "2-4 minggu",
    "website_url": "https://journal.unnes.ac.id/nju/index.php/jpbi",
    "scope": "English, Education",
    "publisher": "Universitas Negeri Semarang",
    "rating": 4.5,
    "bookmarked": false
  },
  {
    "title": "Jurnal Pendidikan Ekonomi",
    "sinta_level": "S3",
    "apc": "Rp 500.000",
    "loa_time": "3-6 minggu",
    "website_url": "https://journal.unnes.ac.id/nju/index.php/jpe",
    "scope": "Economics, Education",
    "publisher": "Universitas Negeri Semarang",
    "rating": 4.3,
    "bookmarked": false
  },
  {
    "title": "Jurnal Pendidikan Geografi",
    "sinta_level": "S2",
    "apc": "Gratis",
    "loa_time": "4-8 minggu",
    "website_url": "https://journal.unnes.ac.id/nju/index.php/jpg",
    "scope": "Geography, Education",
    "publisher": "Universitas Negeri Semarang",
    "rating": 4.1,
    "bookmarked": false
  },
  {
    "title": "Jurnal Pendidikan Sosiologi",
    "sinta_level": "S3",
    "apc": "Gratis",
    "loa_time": "2-5 minggu",
    "website_url": "https://journal.unnes.ac.id/nju/index.php/jps",
    "scope": "Sociology, Education",
    "publisher": "Universitas Negeri Semarang",
    "rating": 4.2,
    "bookmarked": false
  },
  {
    "title": "Jurnal Pendidikan Olahraga",
    "sinta_level": "S2",
    "apc": "Gratis",
    "loa_time": "3-7 minggu",
    "website_url": "https://journal.unnes.ac.id/nju/index.php/jpo",
    "scope": "Sports, Education",
    "publisher": "Universitas Negeri Semarang",
    "rating": 4.0,
    "bookmarked": false
  },
  {
    "title": "Jurnal Pendidikan Seni",
    "sinta_level": "S3",
    "apc": "Gratis",
    "loa_time": "4-6 minggu",
    "website_url": "https://journal.unnes.ac.id/nju/index.php/jpseni",
    "scope": "Art, Education",
    "publisher": "Universitas Negeri Semarang",
    "rating": 4.4,
    "bookmarked": false
  },
  {
    "title": "Jurnal Pendidikan Teknologi Informasi",
    "sinta_level": "S2",
    "apc": "Rp 300.000",
    "loa_time": "2-4 minggu",
    "website_url": "https://journal.unnes.ac.id/nju/index.php/jpti",
    "scope": "Computer Science, Education",
    "publisher": "Universitas Negeri Semarang",
    "rating": 4.7,
    "bookmarked": false
  },
  {
    "title": "Jurnal Pendidikan Lingkungan Hidup",
    "sinta_level": "S3",
    "apc": "Gratis",
    "loa_time": "5-8 minggu",
    "website_url": "https://journal.unnes.ac.id/nju/index.php/jplh",
    "scope": "Environmental Science, Education",
    "publisher": "Universitas Negeri Semarang",
    "rating": 3.9,
    "bookmarked": false
  },
  {
    "title": "Jurnal Pendidikan Pancasila",
    "sinta_level": "S2",
    "apc": "Gratis",
    "loa_time": "3-6 minggu",
    "website_url": "https://journal.unnes.ac.id/nju/index.php/jppancasila",
    "scope": "Civics, Education",
    "publisher": "Universitas Negeri Semarang",
    "rating": 4.2,
    "bookmarked": false
  }
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
    
    // Setup event listeners untuk stars dan bookmark
    setupEventListeners();
}

// Setup event listeners untuk stars dan bookmark
function setupEventListeners() {
    // Filter events
    document.getElementById('sinta-level').addEventListener('change', filterJournals);
    document.getElementById('apc').addEventListener('change', filterJournals);
    document.getElementById('loa-time').addEventListener('change', filterJournals);
    document.getElementById('search').addEventListener('input', filterJournals);
    document.getElementById('search-btn').addEventListener('click', filterJournals);
    
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
    const sintaLevel = document.getElementById('sinta-level').value;
    const apc = document.getElementById('apc').value;
    const loaTime = document.getElementById('loa-time').value;
    const searchTerm = document.getElementById('search').value.toLowerCase();
    
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
renderJournals(journals);