import { createServerFn } from "@tanstack/react-start";
import {HelloWorldResponseSchema} from "#/schema/hello-world.schema.ts";


export const getHelloWorld = createServerFn().handler(async  ()=>{
  const data = {
    message: "Hello World from server functions",
    createdAt: new Date().toISOString(),
  }
  return HelloWorldResponseSchema.parse(data)
})