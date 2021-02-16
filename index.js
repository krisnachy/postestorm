const express = require("express")
const app = express()
const {Book} = require("./models")

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/books', (req, res) => {
    Book.findAll()
    .then(book => {
        res.status(200).json(book)
    })
})

app.get('/books/:id', (req, res) => {
    Book.findOne({
        where: { id: req.params.id}
    })
    .then(book => {
        res.status(200).json(book)
    })
})

app.post('/books', (req, res) => {
    Book.create({
        isbn: req.body.isbn,
        judul: req.body.judul,
        sinopsis: req.body.sinopsis,
        penulis: req.body.penulis,
        genre: req.body.genre
    })

    .then(book => {
        res.status(201).json(book)
    })
    .catch(err => {
        res.status(422).json("Tidak bisa membuat data buku")
    })
})

app.put('/books/:id', (req, res) => {
    Book.update({
        isbn: req.body.isbn,
        judul: req.body.judul,
        sinopsis: req.body.sinopsis,
        penulis: req.body.penulis,
        genre: req.body.genre
    }, {
        where: {id: req.params.id}
    })
    .then(book => {
        res.status(201).json(book)
    })
    .catch(err => {
        res.status(422).json("Tidak bisa mengupdate data buku")
    })
})

app.delete('/books/:id', (req, res) => {
    Book.destroy({
        where: {id: req.params.id}
    })
    .then(book => {
        res.status(201).json(book)
    })
    .catch(err => {
        res.status(422).json("Tidak bisa menghapus data buku")
    })
})

app.listen(3000, () => {
    console.log('SERVER BERHASIL DIJALANKAN');
})