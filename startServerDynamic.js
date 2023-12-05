var express = require("express")
var app = express()
app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var port = process.env.port || 3000;


const cardList = [{
    title: 'Flower',
    path: 'images/image1.jpeg',
    link: 'Rose',
    description: 'Rose is red in color'
},
{
    title: 'Flower',
    path: 'images/image2.jpeg',
    link: 'Lily',
    description: 'Lillies are beautiful'
}];


app.get('/api/projects', (req, res) => {
    res.json({ statusCode: 200, data: cardList, message: "Success" })
});

app.listen(port, () => {
    console.log("App listening to: " + port)
});
