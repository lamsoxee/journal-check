# SINTA Journal Finder

Website untuk mencari jurnal SINTA 2-6 yang **gratis/biaya rendah** dan **LOA cepat**.

## 📌 Fitur
- **Filter**: SINTA level, biaya publikasi, LOA time, bidang ilmu.
- **Search**: Cari jurnal berdasarkan judul/jurusan.
- **Dark Theme**: Desain minimalis dan responsif.
- **Data Terupdate**: 30+ jurnal SINTA (Education, gratis/Rp0-Rp1.5jt).

## 🚀 Cara Jalankan
### Lokal
1. Clone repo:
   ```bash
   git clone /Users/mm/sinta_journal_website
   cd sinta_journal_website
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
├── assets/          # Gambar/logo (opsional)
├── data/
│   └── journals.json # Data jurnal (JSON)
├── scripts/         # Script scrape (opsional)
├── index.html       # Halaman utama
├── script.js        # Logika filter/search
├── style.css        # Desain dark theme
└── README.md        # Dokumentasi
```

## 🔧 Update Data
1. Edit file `data/journals.json` (tambah/ubah jurnal).
2. Format JSON:
   ```json
   {
     "title": "Jurnal Pendidikan IPA",
     "sinta_level": "S2",
     "apc": "Gratis",
     "loa_time": "2-4 minggu",
     "website_url": "https://jurnal.example.com"
   }
   ```

## 🛠️ Kontribusi
- **Bug**: Laporkan via [GitHub Issues](https://github.com/username/sinta-journal-finder/issues).
- **Fitur Baru**: Fork repo dan buat PR.

## 📄 Lisensi
MIT License. Free to use/modify.