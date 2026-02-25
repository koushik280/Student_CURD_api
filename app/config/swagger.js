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
        url: "https://student-curd-api-rzrx.onrender.com/api/students", // change when deployed
      },
    ],
  },
apis: ["./app/routes/*.js", "./app/controller/*.js"], // files containing annotations
};

const specs = swaggerJsdoc(options);
module.exports = specs;
