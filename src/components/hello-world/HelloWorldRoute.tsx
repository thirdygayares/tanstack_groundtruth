import {HelloWorld} from "#/components/hello-world/HelloWorld.tsx";

import {getRouteApi} from "@tanstack/react-router";
import type {HelloWorldResponse} from "#/schema/hello-world.schema.ts";
const routeApi = getRouteApi("/hello-world");

export function HelloWorldRoute() {
  const data = routeApi.useLoaderData() as HelloWorldResponse;

  return <HelloWorld createdAt={data.createdAt} message={data.message} />;
}