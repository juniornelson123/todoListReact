module.exports = function(app){
	var Todo = app.models.todo

	var TodoController = {
		index: function(req, res){
			Todo.find({}).exec().then(function(todo){
				res.status(200).json(todo)
			}, function(error){
				res.status(401).json(error)

			})
		},

		get: function(req, res){
			Todo.findById(req.params.id).then(function(todo){
				res.status(200).json(todo)
			}, function(error){
				res.status(401).json(error)

			})
		},

		create: function(req, res){
			Todo.create(req.body).then(function(todo){
				res.status(200).json(todo)
			}, function(error){
				res.status(401).json(error)

			})
		},

		update: function(req, res){
			Todo.findByIdAndUpdate(req.params.id, req.body).then(function(todo){
				res.status(200).json(todo)
			}, function(error){
				res.status(401).json(error)

			})
		},

		delete: function(req, res){
			Todo.findByIdAndRemove(req.params.id).then(function(todo){
				res.status(200).json(todo)
			}, function(error){
				res.status(401).json(error)

			})
		}
	}

	return TodoController
}