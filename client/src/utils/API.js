import axios from "axios";

export default {
    // Gets all scores
    getScores: function () {
        return axios.get("/api/score/");
    },
    // Gets the score with the given id (id is placeholder for real id)
    getScore: function (id) {
        return axios.get("/api/score/" + id);
    },
    // Saves a Score to the database
    saveScore: function (scoreData) {
        return axios.post("/api/score", scoreData);
    },
    updateScore: function (scoreData) {
        return axios.put("/api/score/" + scoreData._id, scoreData);
    },

    // register a user
    register: function (userInput) {
        return axios.post("/api/users", userInput);
    },
    // login a user
    login: function (userInput) {
        console.log(userInput);
        return axios.post("/api/users/login", {
            username: userInput.username,
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
