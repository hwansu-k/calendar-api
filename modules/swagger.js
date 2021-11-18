const swaggerUi = require('swagger-ui-express');
const swaggereJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Calendar API',
      version: '1.0.0',
      description: '',
    },
    servers: [
      {
        url: 'http://api.kumas.dev',
      },
    ],
  },
  apis: ['./models/*.js', './routes/*.js', './swagger/*.yaml'],
};

const specs = swaggereJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};
