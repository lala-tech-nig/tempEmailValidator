const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Email Checker API',
      version: '1.0.0',
      description: 'API to validate email addresses for registration',
    },
    servers: [
      {
        url: 'https://tempemailvalidator.onrender.com/',
      },
    ],
  },
  apis: ['./server.js'], // API docs live inside this file
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
