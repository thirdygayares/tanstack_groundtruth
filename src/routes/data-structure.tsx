import { createFileRoute } from '@tanstack/react-router'
import {ListDataStructure} from "#/components/datastructure/DataStructureRoute.tsx";

export const Route = createFileRoute('/data-structure')({
  component: ListDataStructure,
})


