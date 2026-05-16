import { createFileRoute } from "@tanstack/react-router";

import { getHelloWorld } from "#/server/hello";
import {
  type HelloWorldResponse,
  HelloWorldResponseSchema,
} from "#/schema/hello-world.schema";
import {HelloWorldRoute} from "#/components/hello-world/HelloWorldRoute.tsx";

export const Route = createFileRoute("/hello-world")({
  loader: async (): Promise<HelloWorldResponse> => {
    const data = await getHelloWorld();
    return HelloWorldResponseSchema.parse(data);
  },
  component: HelloWorldRoute,
});

