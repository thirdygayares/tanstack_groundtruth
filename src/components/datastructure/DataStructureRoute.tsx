import {useQuery} from "@tanstack/react-query";
import {type DataStructureResponse, DataStructureResponseSchema} from "#/schema/data-structure.schema.tsx";
import {getDataStructure} from "#/server/data-structure.ts";
import {ListDatastructure} from "#/components/datastructure/ListDataStructure.tsx";

export function ListDataStructure() {

  const dataStuctureQuery = useQuery<DataStructureResponse>({
    queryKey: ["datastructure"],
    queryFn: async () => {
      const response = await getDataStructure();
      return DataStructureResponseSchema.parse(response);
    }
  })

  if (dataStuctureQuery.isLoading){
    return <p>Loading...</p>
  }

  if (dataStuctureQuery.isError){
    return <p>Error loading</p>
  }



  const data = dataStuctureQuery.data

  if (!data){
    return <>No data</>
  }

    return <>
    <ListDatastructure names={data.names}/>
  </>

}