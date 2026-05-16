import { createServerFn } from "@tanstack/react-start";


export const getHelloWorld = createServerFn().handler(async  ()=>{
  return {
    message: "Hello World from server functions",
    createdAt: new Date().toISOString(),
  }
})