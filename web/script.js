// Data jurnal dari JSON
let journals = [];

// Load data dari JSON
fetch('data/journals.json')
    .then(response => response.json())
    .then(data => {
        journals = data;
        renderJournals(journals);
    })
    .catch(err => console.error('Error loading data:', err));

// Render jurnal ke HTML
function renderJournals(journalsToRender) {
    const journalList = document.getElementById('journal-list');
    journalList.innerHTML = '';
    
    journalsToRender.forEach(journal => {
        const journalElement = document.createElement('div');
        journalElement.className = 'journal-item';
        journalElement.innerHTML = `
            <div class="journal-title">${journal.title}</div>
            <div class="journal-sinta">${journal.sinta_level}</div>
            <div class="journal-apc">${journal.apc}</div>
            <div class="journal-loa">${journal.loa_time || 'Tidak Diketahui'}</div>
            <div class="journal-actions">
                <a href="${journal.website_url || '#'}" target="_blank" class="btn">🔗 Website</a>
                <a href="${journal.journal_url}" target="_blank" class="btn">📄 Detail</a>
            </div>
        `;
        journalList.appendChild(journalElement);
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

// Event listeners untuk filter
document.getElementById('sinta-level').addEventListener('change', filterJournals);
document.getElementById('apc').addEventListener('change', filterJournals);
document.getElementById('loa-time').addEventListener('change', filterJournals);
document.getElementById('search').addEventListener('input', filterJournals);