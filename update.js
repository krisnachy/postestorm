const { Book } = require("./models")

const query = {
    where: {id: 1}
}

Book.update({
    genre: 'Fantasy'
}, query)
.then(() => {
    console.log("Data buku berhasil diupdate")
    process.exit
})
.catch(err => {
    console.log("Data buku gagal diupdate")
})