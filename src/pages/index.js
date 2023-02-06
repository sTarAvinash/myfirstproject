import { Button, Container } from "@mantine/core";  
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter()
  return (
    <div
    style={{
      backgroundColor: 'White',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column'
    }}
    >
      <Container>
        <div
          style={{
            fontSize: 40,
            fontweight: "bolder",
            fontFamily: 'Rubik Vinyl',
            color: 'Black'
          }}
        >
          Let's Todo it
        </div>
      </Container>
      <Container style={{marginTop: 15}}>
        <Button 
          variant="gradient" gradient={{ from: 'orange', to: 'red'}}
          onClick={() => router.push("/todo")}
          >
          Go to Todos
        </Button>
      </Container>

    </div>
  )
}
