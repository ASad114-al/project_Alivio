
const express = require('express')
const app = express()
console.log(__dirname);
app.use(express.static('public'));

app.get('/', (request, response) => {
    response.sendFile('./views/home.html', { root: __dirname })
})
app.get('/Community', (req, res) => {
   
    res.sendFile('./views/Community.html', { root: __dirname })
})
app.get('/Solutions', (req, res) => {
    res.sendFile('./views/Solutions.html', { root: __dirname })
})
app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname })
})
app.get('/pricing', (req,res) => {
    res.sendFile('./views/pricing.html', {root: __dirname})
})



app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname })
})

app.listen(5000, () => console.log('Server running ...'))