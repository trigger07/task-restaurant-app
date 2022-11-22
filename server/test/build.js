const Fastify = require('fastify')
const staffRoutes = require('../routes/staff.routes');

// run server for testing
function buildFastify () {
  const fastify = Fastify()

  //instantiate database
  require("../utils/mongoose");
  require('../utils/load');

  fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
  })

  // load all routes
  staffRoutes.forEach((route) => {
    fastify.route(route);
  });

  return fastify
}

module.exports = buildFastify