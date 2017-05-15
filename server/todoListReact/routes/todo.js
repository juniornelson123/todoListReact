module.exports = function(app){
	var Todo = app.controllers.todo

	app.get("/todos", Todo.index)
	app.get("/todos/:id", Todo.get)
	app.post("/todos", Todo.create)
	app.put("/todos/:id", Todo.update)
	app.delete("/todos/:id", Todo.delete)
}