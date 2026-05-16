
type Props = {
  names: string[]
}

export function ListDatastructure(props: Props) {
  const {names} = props;

  return(
    <ul>
      {names.map((item, index)=> (
        <li key={`${item}-${index}`}>{item}</li>
      ))}
    </ul>
  )

}