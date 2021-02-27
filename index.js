const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

app.set('port', (process.env.PORT || 80));

var credentials = [{ Username: 'Test', Password: '12314' }]
var postings = [{
    id: "123b3123gr",
    title: "Kitchen Table",
    category: "Furniture",
    location: "Detroit",
    image: "string",
    price: 30,
    date: "29.01.2021",
    delivery: "Pickup",
    contact_information: "Ben Dover, mobile:+358 184534344",
    image2: "string",
    image3: "string",
    image4: "string"
  }]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/posting', (req, res) => {
    res.status(200)
    res.send(JSON.stringify(postings))
})

app.post('/posting', (req,res) => {
    if(req.body.hasOwnProperty('PostingInformation') == false){
        res.status(406)
        res.send("Not Acceptable Information given")
    }
    else if(req.body.PostingInformation.hasOwnProperty('id') == false){
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
    var reArray = []
    for(element of postings){
        if(element.id == req.params.id){
            reArray.push(element);
        }
    }
    if(reArray === undefined || reArray.length == 0){
        res.status(404).send("No posting with given id found")
    }
    else{
        res.send(reArray)
    }
})

app.put('/posting/:id', (req, res) => {
    var reArray = [];

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
        for(element of postings){
            if(element.id == req.params.id){
                element.title = req.body.PostingInformation.title;
                element.category = req.body.PostingInformation.category;
                element.location = req.body.PostingInformation.location;
                element.image = req.body.PostingInformation.image;
                element.price = req.body.PostingInformation.price;
                element.date = req.body.PostingInformation.date;
                element.delivery = req.body.PostingInformation.delivery;
                element.contact_information = req.body.PostingInformation.contact_information;
                reArray.push(element);
                res.send('Update posting with id ' + req.params.id + JSON.stringify(reArray))
            }
        }
    } 
})

app.delete('/posting/:id', (req, res) => {
    var deleted = false;
    for(var i = postings.length -1;
        i >= 0;
        i--){
        if(postings[i].id == req.params.id){
            postings.splice(i,1)
            deleted = true;
        }
    }
    if(deleted == false){
        res.status(400).send('Posting does not exist')
    }
    else{
        res.send('Posting deleted')
    }
})

app.get('/posting/category/:id', (req, res) => {
    var reArray = []
    for(element of postings){
        if(element.category == req.params.id){
            reArray.push(element);
        }
    }
    if(reArray === undefined || reArray.length == 0){
        res.status(404).send("No posting with given category found")
    }
    else{
        res.send(reArray)
    }
})

app.get('/posting/location/:id', (req, res) => {
    var reArray = []
    for(element of postings){
        if(element.location == req.params.id){
            reArray.push(element);
        }
    }
    if(reArray === undefined || reArray.length == 0){
        res.status(404).send("No posting with given location found")
    }
    else{
        res.send(reArray)
    }
})

app.get('/posting/date/:id', (req, res) => {
    var reArray = []
    for(element of postings){
        if(element.date == req.params.id){
            reArray.push(element);
        }
    }
    if(reArray === undefined || reArray.length == 0){
        res.status(404).send("No posting with given date found")
    }
    else{
        res.send(reArray)
    }
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

app.put('/login', (req,res) =>{
    if(req.body.hasOwnProperty('Username') == false){
        res.status(406)
        res.send("Not Acceptable Credentials")
    }
    else if(req.body.hasOwnProperty('Password') == false){
        res.status(406)
        res.send("Not Acceptable Credentials")
    }
    else{
        var user = credentials.find(element => element.Username == req.body.Username);
        if(user === undefined || user.length == 0){
            res.status(401).send('Wrong Information')
        }
        else if(user.Password == req.body.Password){
            res.status(200).send('logged in')
        }
        else{
            res.status(401).send('Wrong Information')
        }
    }
})

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

