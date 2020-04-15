import axios from "axios";

export default {
    // Gets all todos
    //   getTodos: function() {
    //     return axios.get("/api/todos/");
    //   },
    //   // Gets the todo with the given id
    //   getTodo: function(id) {
    //     return axios.get("/api/todos/" + id);
    //   },
    //   // Saves a todo to the database
    //   saveTodo: function(todoData) {
    //     return axios.post("/api/todos", todoData);
    //   },
    //   updateTodo: function(todoData) {
    //     return axios.put("/api/todos/" + todoData._id, todoData);
    //   },

    // register a user
    register: function (userInput) {
        return axios.post("/api/users", userInput);
    },
    // login a user
    login: function (userInput) {
        return axios.post("/api/users/login", {
            email: userInput.email,
            password: userInput.password
        });
    },
    // logout a user
    logout: function () {
        return axios.post("/api/users/logout");
    },
    // see if user is logged in
    status: function () {
        return axios.get('/api/users')
    }
};
