const tap = require('tap')
const supertest = require('supertest')
const buildFastify = require('./build')

// test GetCooks method
tap.test('GET `/GetCooks` route', async (t) => {
  const fastify = buildFastify()

  t.teardown(() => fastify.close())

  await fastify.ready()

  const response = await supertest(fastify.server)
    .get('/GetCooks')
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
})

// test GetWaiters method
tap.test('GET `/GetWaiters` route', async (t) => {
    const fastify = buildFastify()
  
    t.teardown(() => fastify.close())
  
    await fastify.ready()
  
    const response = await supertest(fastify.server)
      .get('/GetWaiters')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
  })