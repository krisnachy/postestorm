const { Book } = require("./models")

Book.create({
    isbn: '125374',
    judul: 'Satu',
    sinopsis: 'Ini adalah sinopsis pertama',
    penulis: 'Anon',
    genre: 'Romance'
})
.then(book => {
    console.log(book);
})