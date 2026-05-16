
type Props = {
  message: string,
  createdAt: string
}

export function HelloWorld(props: Props) {
  const { message, createdAt } = props;

  return(
    <main>
      <h1>From Server function</h1>
      <p>{message}</p>
      <p>Server Time: {createdAt}</p>
    </main>
  )
}