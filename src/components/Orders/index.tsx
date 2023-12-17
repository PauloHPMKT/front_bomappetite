import { OarderBoard } from "../OrderBoard"
import { Container } from "./styles"

export const Orders = () => {
  return(
    <Container>
      <OarderBoard
        icon="⏱️"
        title="Fila de espera"
      />
      <OarderBoard
        icon="⌛"
        title="Em andamento"
      />
      <OarderBoard
        icon="✔️"
        title="Pronto!"
      />
    </Container>
  )
}
