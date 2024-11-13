const express = require('express');
const path = require('path');

const app = express();

// Mengatur template engine, misalnya EJS
app.set('view engine', 'ejs');

// Mengatur direktori views
app.set('views', path.join(__dirname, 'views'));

// Mengatur direktori public untuk file statis
const direktoriPublic = path.join(__dirname, '../public');
app.use(express.static(direktoriPublic));

// Halaman utama
app.get('', (req, res) => {
    res.send('<h1>Selamat datang di halaman utama</h1>');
});

// Halaman bantuan
app.get('/bantuan', (req, res) => {
    res.render('tentang', {
        judul: 'Tentang Saya',
        nama: 'Aca',
        teksBantuan: 'Ini adalah teks bantuan',
        faqs: [
            {
                pertanyaan: 'Halaman ini digunakan untuk apa?',
                jawaban: 'Halaman ini digunakan untuk memberikan informasi dan bantuan mengenai aplikasi ini.'
            },
            {
                pertanyaan: 'Apa itu API?',
                jawaban: 'API (Application Programming Interface) adalah sekumpulan aturan yang memungkinkan satu aplikasi berinteraksi dengan aplikasi lain.'
            },
            {
                pertanyaan: 'API apa yang digunakan dalam aplikasi ini?',
                jawaban: 'Aplikasi ini menggunakan API Express untuk membuat server web dan menangani routing halaman.'
            },
            {
                pertanyaan: 'Salah satu pola arsitektur API adalah RESTful',
                jawaban: 'RESTful adalah arsitektur API yang menggunakan metode HTTP seperti GET, POST, PUT, DELETE untuk berkomunikasi dengan server.'
            }
        ]
    });
});

// Menjalankan server pada port 5000
app.listen(5000, () => {
    console.log('Server berjalan pada port 5000.');
});
