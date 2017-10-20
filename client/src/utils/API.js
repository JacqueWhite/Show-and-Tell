import axios from "axios";
export default {
  // Gets all projects
  getProjects: function() {
    return axios.get("/api/projects");
  },
  // Gets the project with the given id
  getProject: function(id) {
    return axios.get("/api/project/" + id);
  },
  // Deletes the project with the given id
  deleteProject: function(id) {
    return axios.delete("/api/project/" + id);
  },
  // Saves a project to the database
  saveProject: function(projectData) {
    return axios.post("/api/project", projectData);
  },
  // Saves a user to the database
  saveUser: function(user) {
    return axios.post("/api/user/signup", user);
  },
  // Gets the user with the given id
  getUser: function(email) {
    return axios.get("/api/user/" + email);
  }
};