# Tugas-3-Aplikasi-SITTA-UT
# Sistem Bahan Ajar SITTA - Universitas Terbuka

Aplikasi web *Single Page Application* (SPA) sederhana untuk manajemen stok, tracking *Delivery Order* (DO), dan pembuatan pesanan bahan ajar mahasiswa Universitas Terbuka.

Aplikasi ini dibangun menggunakan Vue.js 2 (via CDN) dengan arsitektur berbasis komponen *(Component-Based Architecture)* tanpa *build tools* (Node.js/Webpack), sehingga sangat ringan dan mudah dipelajari.

## 🚀 Fitur Utama

1. **📦 Stok Bahan Ajar (CRUD & Filter)**
   - Menampilkan daftar bahan ajar.
   - Filter berdasarkan UT-Daerah dan Kategori.
   - Fitur *Sorting* (Urutkan) berdasarkan Judul, Harga, dan Qty.
   - Indikator Visual (Badge) untuk status stok (Aman, Menipis, Kosong) dengan fitur *Hover Tooltip*.
   - Form Tambah/Edit/Hapus data stok.

2. **🚚 Tracking DO**
   - Pencarian status pengiriman menggunakan Nomor DO atau NIM Mahasiswa.
   - Menampilkan riwayat perjalanan pengiriman (Tracking history).

3. **📝 Buat Pesanan Baru**
   - Form pembuatan Delivery Order baru.
   - *Auto-generate* Nomor DO berdasarkan tahun dan urutan.
   - Perhitungan total harga otomatis berdasarkan paket yang dipilih.
   - Data otomatis masuk ke dalam sistem Tracking setelah di-submit.

## 🛠️ Teknologi yang Digunakan

- **HTML5 & CSS3** (Custom styling, tanpa framework CSS eksternal)
- **JavaScript (ES6)**
- **Vue.js v2** (Didatangkan melalui CDN)
- **Fetch API** (Untuk simulasi pemanggilan data dari Mock JSON lokal)

## 📂 Struktur Direktori

```text
├── assets/
│   └── css/style.css            # Styling aplikasi
├── data/
│   └── dataBahanAjar.json       # Mocking Data API (Database statis)
├── js/
│   ├── components/              # Vue Components
│   │   ├── do-tracking.js
│   │   ├── order-form.js
│   │   ├── status-badge.js
│   │   └── stock-table.js
│   ├── services/
│   │   └── api.js               # Service API Fetcher
│   └── app.js                   # Main Vue Instance & Filters
└── index.html                   # Entry point
```

Aplikasi web *Single Page Application* (SPA) sederhana untuk manajemen stok, tracking *Delivery Order* (DO), dan pembuatan pesanan bahan ajar mahasiswa Universitas Terbuka.

## ⚙️ Cara Menjalankan Aplikasi

Karena aplikasi ini menggunakan `fetch()` untuk mengambil file `dataBahanAjar.json` lokal, aplikasi tidak bisa dijalankan hanya dengan klik ganda pada `index.html` karena akan diblokir oleh kebijakan *CORS*. Anda harus menjalankannya menggunakan **Local Web Server**.

**Opsi 1: Menggunakan VS Code (Rekomendasi)**
1. Buka folder project ini di Visual Studio Code.
2. Install ekstensi **Live Server**.
3. Klik kanan pada file `index.html` lalu pilih **"Open with Live Server"**.
4. Browser akan otomatis terbuka di `http://127.0.0.1:5500`.

**Opsi 2: Menggunakan Python**
Jika Anda sudah menginstal Python, buka terminal/CMD di dalam folder project ini dan jalankan:
`python -m http.server 8000`

**Opsi 3: Menggunakan Node.js**
`npx http-server`

## 👨‍💻 Penulis
Dikembangkan oleh Wilia untuk keperluan Tugas / Proyek Universitas Terbuka.
