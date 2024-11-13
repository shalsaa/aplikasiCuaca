const express = require('express') 

const app = express() 

//ini halaman/page utama 

app.get('', (req, res) => { 
    res.send('<h1> Selamat datang di halaman utama info Cuaca</h1>') 
}) 
//ini halaman bantuan/FAQ (Frequently Asked Questions) 
app.get('/infoCuaca', (req, res) => { 
    if (!req.query.address) { 
        return res.send({ 
            error: ' Kamu harus memasukan lokasi yang ingin dicari' 
        }) 
    } 
    res.send({ 
        prediksiCuaca: 'Cuaca Sedang Hujan', 
        lokasi: 'Padang', 
        address: req.query.address 
    }) 
}) 

app.listen(5000, () => { 
    console.log('Server berjalan pada port 5000.') 
}) 

const path = require('path')

const direktoriPublic =path.join(__dirname, '../public')

app.use(express.static(direktoriPublic))