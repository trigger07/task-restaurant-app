exports.options = {
    routePrefix: '/documentation',
    exposeRoute: true,
    swagger: {
        info: {
            title: "Fastify API",
            description: "Swagger API",
            version: "1.0.0",
        },
        externalDocs: {
            url: "https://swagger.io",
            description: "Find more info here",
        },
        host: "localhost:4500",
        schemes: ["http"],
        consumes: ["application/json"],
        produces: ["application/json"],
    },
};