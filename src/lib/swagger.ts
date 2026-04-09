import path from "path";
import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Next.js",
            version: "1.0.0",
        },
        components: {
            schemas: {
                Player: {
                    type: "object",
                    properties: {
                        id: { type: "integer" },
                        name: { type: "string" },
                    },
                },
                Team: {
                    type: "object",
                    properties: {
                        id: { type: "integer" },
                        name: { type: "string" },
                        playerIds: {
                            type: "array",
                            items: { type: "integer" },
                        },
                    },
                },
                TeamWithPlayers: {
                    allOf: [
                        { $ref: "#/components/schemas/Team" },
                        {
                            type: "object",
                            properties: {
                                players: {
                                    type: "array",
                                    items: {
                                        $ref: "#/components/schemas/Player",
                                    },
                                },
                            },
                        },
                    ],
                },
            },
        },
    },
    apis: [path.join(process.cwd(), "app/api/**/route.ts")],
};

export const swaggerSpec = swaggerJSDoc(options);
