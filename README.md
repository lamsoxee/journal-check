# SINTA Journal Finder

Website untuk mencari jurnal SINTA 2-6 yang **gratis/biaya rendah** dan **LOA cepat** dengan fitur **filter canggih** dan **UI modern**.

## 📌 Fitur
- **Filter Dropdown**: SINTA level, biaya publikasi (APC), LOA time, frekuensi terbit, bahasa.
- **Search**: Cari jurnal berdasarkan **judul** atau **scope** (bidang ilmu).
- **Sorting**: Urutkan berdasarkan nama, SINTA level, atau APC.
- **Bookmark**: Simpan jurnal favorit (persist di `localStorage`).
- **Dark Mode**: Desain responsif dengan toggle dark/light mode.
- **Pagination**: 10 jurnal per halaman (biar gak lag).
- **Data Terupdate**: 30+ jurnal SINTA (Education, gratis/Rp0-Rp1.5jt).

## 🚀 Cara Jalankan
### Lokal
1. Clone repo:
   ```bash
   git clone ~/projects/sinta-journal-finder
   cd sinta-journal-finder
   ```
2. Jalankan server:
   ```bash
   python3 -m http.server 8000
   ```
3. Buka browser:
   👉 [http://localhost:8000](http://localhost:8000)

### Deploy
- **Vercel**: Drag & drop folder ke [vercel.com](https://vercel.com/).
- **Netlify**: Drag & drop folder ke [netlify.com](https://www.netlify.com/).

## 📂 Struktur Folder
```
.
├── data/
│   └── journals.json    # Data jurnal (JSON, auto-generate `id`)
├── index.html           # Halaman utama (Tailwind CSS)
├── script.js            # Logika filter/search/bookmark/pagination
└── README.md            # Dokumentasi
```

## 🔧 Update Data
1. Edit file `data/journals.json` (tambah/ubah jurnal).
2. Format JSON:
   ```json
   {
     "id": 1,
     "title": "Jurnal Pendidikan IPA",
     "sintaLevel": 2,
     "apc": 0,
     "loaTime": "2-4 minggu",
     "scope": ["Education", "Science"],
     "frequency": "Kuartalan",
     "e_issn": "1234-5678",
     "p_issn": "8765-4321",
     "journal_url": "https://jurnal.example.com",
     "website_url": "https://jurnal.example.com"
   }
   ```

## 🛠️ Kontribusi
- **Bug**: Laporkan via GitHub Issues.
- **Fitur Baru**: Fork repo dan buat PR.

## 📄 Lisensi
MIT License. Free to use/modify.