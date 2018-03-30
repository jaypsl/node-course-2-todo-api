var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {User} = require('./models/users');

var app = express();

app.use(bodyParser.json());

 app.post('/todos', (req,res)=> {

 	var todo = new Todo({
	text: req.body.text
});

todo.save().then((doc)=>{
res.send(doc);
}, (e)=>{
	res.status(400).send(e);
});

//console.log(req.body);
 });

 //GET /todos/1234sggdhf

app.listen(3000, ()=> {
	console.log('started on port 3000');
})


