"use client";

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import type { OpenAPIV3 } from "openapi-types";

type Props = {
    spec: OpenAPIV3.Document;
};

export default function ApiDocClient({ spec }: Props) {
    console.log(spec.paths);
    return <SwaggerUI spec={spec} />;
}
