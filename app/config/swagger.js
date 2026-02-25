const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Student Management API",
      version: "1.0.0",
      description: "A simple CRUD API for managing students",
    },
    servers: [
      {
        url: "http://localhost:5000/api", // change when deployed
      },
    ],
  },
apis: ["./app/routes/*.js", "./app/controller/*.js"], // files containing annotations
};

const specs = swaggerJsdoc(options);
module.exports = specs;
