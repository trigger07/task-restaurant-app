'use strict';

const fastify = require("fastify")({ logger: true });

//instantiate database
require("./utils/mongoose");

const dotenv = require("dotenv");
const swagger = require("./utils/swagger");
const staffRoutes = require('./routes/staff.routes');
const populateData = require('./utils/load');

dotenv.config();

//swagger documentation
fastify.register(require("@fastify/swagger"), swagger.options);
fastify.register(require("@fastify/swagger-ui"), {});

//default route
fastify.get('/', async function (request, reply) {
    return { server: 'started' }
  })

// load all routes
staffRoutes.forEach((route) => {
    fastify.route(route);
});


// initialize server
const start = async () => {
    try {
        await fastify.listen({ port: process.env.PORT });
        await populateData();

        fastify.swagger();
        fastify.log.info(`server listening on ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();