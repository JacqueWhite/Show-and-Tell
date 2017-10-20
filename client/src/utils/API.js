import axios from "axios";
export default {
  // Gets all projects
  getProjects: function() {
    return axios.get("/api/projects");
  },
  // Gets the project with the given id
  getProject: function(id) {
    return axios.get("/api/projects/" + id);
  },
  // Deletes the project with the given id
  deleteProject: function(id) {
    return axios.delete("/api/projects/" + id);
  },
  // Saves a project to the database
  saveProject: function(projectData) {
    return axios.post("/api/projects", projectData);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  }

};
