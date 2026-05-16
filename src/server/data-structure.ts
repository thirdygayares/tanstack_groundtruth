import {createServerFn} from "@tanstack/react-start";
import {DataStructureResponseSchema} from "#/schema/data-structure.schema.tsx";


const names = ["jeffrey", "james", "john"]

export const getDataStructure = createServerFn({method: "GET"}).handler(async() => {
  const response = {
    names
  }

  return DataStructureResponseSchema.parse(response)
});