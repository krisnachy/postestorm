const { Book } = require('./models')

Book.findAll({
    where: {
        genre: 'Fantasy'
    }
})
.then(book => console.log(book))