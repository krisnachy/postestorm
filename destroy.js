const { Book } = require('./models')

Book.destroy({
    where: {
        id: 3
    }
})
.then(() => console.log("Data berhasil dihapus"))