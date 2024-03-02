// controllers/flights.js

function show(req, res) {
  res.render('todos/show', {
    todo: Todo.getOne(req.params.id),
    // Don't forget to add the comma above
    title: 'To-Do Details'
  });
}

function index(req, res) {
  res.render('todos/index', {
    todos: Todo.getAll(),
    title: 'All To-Dos'
  });
}