require('./config/config.js');

const express = require('express');
const app = express();
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/user', function(req, res) {
    res.json('getUsers');
})

app.post('/user', (req, res) => {
    let body = req.body;
    if (body.username == undefined) {
        res.status(400).json({
            code: 2,
            msg: "Defina su usuario porfavor"
        });
    } else {
        res.json(body);
    }
});

app.put('/user/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/user', (req, res) => {
    res.json('deleteUser');
});

app.listen(process.env.PORT, () => {
    console.log('REST Server listening on port', process.env.PORT);
});