var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');


// GET all the Todos
module.exports.todosGetAll = function(req, res) {

	console.log('GET the todos');
	console.log(req.query);

	Todo
	.find()
	.exec(function(err, todos) {
		console.log(err);
		console.log(todos);
		if (err) {
			console.log("Error finding todos");
			res
	  			.status(500)
		  		.json(err);
		} else {
			console.log("Found todos", todos.length);
			res
				.status(200)
				.json(todos);
		}
	});
};


// POST a new Todo
module.exports.todosAddOne = function(req, res) {
	console.log("POST new todo");

	Todo
	.create({
  		text : req.body.text,
  		done : req.body.done,
  		priority : req.body.priority
	}, function(err, todo) {
  		if (err) {
	    	console.log("Error creating todo");
	    	res
	      		.status(400)
	      		.json(err);
  		} else {
    		console.log("Todo created!", todo);
    		res
      			.status(201)
      			.json(todo);
  		}
	});
};


// GET one specific Todo by ID
module.exports.todosGetOne = function(req, res) {

	var id = req.params.todoId;

	console.log('GET todoId', id);

	Todo
	.findById(id)
	.exec(function(err, doc) {
	  var response = {
	    status : 200,
	    message : doc
	  };
	  if (err) {
	    console.log("Error finding todo");
	    response.status = 500;
	    response.message = err;
	  } else if(!doc) {
	    console.log("todoId not found in database", id);
	    response.status = 404;
	    response.message = {
	      "message" : "todo ID not found " + id
	    };
	  }
	  res
	    .status(response.status)
	    .json(response.message);
	});
};


// PUT one specific Todo by ID
module.exports.todosUpdateOne = function(req, res) {
  var todoId = req.params.todoId;

  console.log('GET todoId', todoId);

  Todo
    .findById(todoId)
    .exec(function(err, todo) {
      if (err) {
        console.log("Error finding todo");
        res
          .status(500)
          .json(err);
          return;
      } else if(!todo) {
        console.log("todoId not found in database", todoId);
        res
          .status(404)
          .lson({
            "message" : "todo ID not found " + todoId
          });
          return;
      }

      todo.text = req.body.text || todo.text;
      todo.priority = req.body.priority || todo.priority;
      todo.done = req.body.done || todo.done;

      todo
        .save(function(err, todoUpdated) {
          if(err) {
            res
              .status(500)
              .json(err);
          } else {
            res
              .status(204)
              .json(todoUpdated);
          }
        });


    });

};


// DELETE one specific Todo by ID
module.exports.todosDeleteOne = function(req, res) {
	var id = req.params.todoId;

	console.log('DELETE todoId', id);

	Todo
	.findByIdAndRemove(id)
	.exec(function(err, doc) {
	  var response = {
	    status : 204,
	    message : doc
	  };
	  if (err) {
	    console.log("Error finding todo");
	    response.status = 500;
	    response.message = err;
	  } else if(!doc) {
	    console.log("todoId not found in database", id);
	    response.status = 404;
	    response.message = {
	      "message" : "todo ID not found " + id
	    };
	  }
	  res
	    .status(response.status)
	    .json(response.message);
	});
}