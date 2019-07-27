const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('yo!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(express.static('public'));

app.get('/lists/:id', getLists)

function getLists (req, res) {
  let data = req.params
  res.send('Sup' + data.id)
}

// app.get('/items', getItems)

// function getItems (req, res) {
// res.send('Sup')
// }

// app.post('/list', postList)

// function postList (req, res) {
// res.send('Sup')
// }

// app.post('/item', postLists)

// function postItem (req, res) {
// res.send('Sup')
// }

// app.delete('/list', deleteList)

// function deleteList (req, res) {
// res.send('Sup')
// }

// app.delete('/item', deleteLists)

// function deleteItem (req, res) {
// res.send('Sup')
// }