
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())

var credentials = [{ Username: 'Test', Password: '12314' }]
var postings = []

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/posting', (req, res) => {
    res.status(200)
    res.send(JSON.stringify(postings))
})

app.post('/posting', (req,res) => {
    if(req.body.PostingInformation.hasOwnProperty('id') == false){
        res.status(406)
        res.send("Not Acceptable Information given")
    }
    else if(req.body.PostingInformation.hasOwnProperty('title') == false){
        res.status(406)
        res.send("Not Acceptable Information given")
    }
    else if(req.body.PostingInformation.hasOwnProperty('category') == false){
        res.status(406)
        res.send("Not Acceptable Information given")
    }
    else if(req.body.PostingInformation.hasOwnProperty('location') == false){
        res.status(406)
        res.send("Not Acceptable Information given")
    }
    else if(req.body.PostingInformation.hasOwnProperty('image') == false){
        res.status(406)
        res.send("Not Acceptable Information given")
    }
    else if(req.body.PostingInformation.hasOwnProperty('price') == false){
        res.status(406)
        res.send("Not Acceptable Information given")
    }
    else if(req.body.PostingInformation.hasOwnProperty('date') == false){
        res.status(406)
        res.send("Not Acceptable Information given")
    }
    else if(req.body.PostingInformation.hasOwnProperty('delivery') == false){
        res.status(406)
        res.send("Not Acceptable Information given")
    }
    else if(req.body.PostingInformation.hasOwnProperty('contact_information') == false){
        res.status(406)
        res.send("Not Acceptable Information given")
    }
    else{
        postings.push(req.body.PostingInformation)
        res.send('Posting created')
    }
})

app.get('/posting/:id', (req, res) => {
    res.send('Get posting with id ' + req.params.id)
})

app.put('/posting/:id', (req, res) => {
    res.send('Update posting with id ' + req.params.id)
})

app.delete('/posting/:id', (req, res) => {
    res.send('delete posting with id ' + req.params.id)
})

app.get('/posting/category/:id', (req, res) => {
    res.send('Get postings category with category ' + req.params.id)
})

app.get('/posting/location/:id', (req, res) => {
    res.send('Get postings location with location ' + req.params.id)
})

app.get('/posting/date/:id', (req, res) => {
    res.send('Get postings date with date ' + req.params.id)
})

app.post('/user', (req,res) => {
    //Check for json keys and sending response
    var duplicate = false
    if(req.body.hasOwnProperty('Username')){
        user_name = req.body.Username;
        //Check for duplicate Username
        credentials.forEach(element => {
            if(element.Username == req.body.Username){
                duplicate = true;
                res.status(410);
                res.send("Not Acceptable information given")
            }
        })
        if(duplicate == false){
            if(req.body.hasOwnProperty('Password')){
                res.status(200);
                res.send('Created user with credentials ' + req.body.Username + ' ' + req.body.Password);
                credentials.push(req.body);
                console.log(credentials);
            }
            else{
                res.status(406);
                res.send("Not Acceptable information given")
            }
        }
    }
    else{
        res.status(406);
        res.send("Missing Username")
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})