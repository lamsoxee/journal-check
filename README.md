# SINTA Journal Finder

Project untuk mencari jurnal SINTA 2-6 yang **gratis/biaya rendah** dan **LOA cepat**.

## 📁 Struktur Folder
```
~/projects/sinta-journal-finder/
├── web/                  # Website (HTML/JS/CSS)
├── data/                 # Data jurnal (JSON)
└── scripts/              # Script Python
```

## 🚀 Quick Start
1. **Jalankan Website**:
   ```bash
   cd ~/projects/sinta-journal-finder/web
   python3 -m http.server 8000
   ```
2. **Update Data**: Edit `web/data/journals.json`.
3. **Scrape Data Baru**: Jalankan script di `scripts/scrape.py`.

## 📂 Detail Folder
### `web/`
- Website static (HTML/JS/CSS).
- Dokumentasi: `web/README.md`.

### `data/`
- `raw_journals.json`: Data mentah dari scrape.

### `scripts/`
- `scrape.py`: Script untuk scrape CekJurnal.id.

## 🛠️ Kontribusi
- **Bug**: Laporkan via GitHub Issues.
- **Fitur Baru**: Fork repo dan buat PR.

## 📄 Lisensi
MIT License.