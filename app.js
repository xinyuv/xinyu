const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

app.listen(3000, function() {
    console.log('Server listening at port 3000....');
});
