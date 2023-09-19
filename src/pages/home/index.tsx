import previewHome from '../../assets/previews/previewHome.svg'
import { Container, Hero, Preview } from './styles'
import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Agendamento descomplicado</Heading>
        <Text size="lg">
          Conecte seu calendário e permita que as pessoas marque agendamento no
          seu tempo livre
        </Text>
      </Hero>
      <Preview>
        <Image
          src={previewHome}
          height={400}
          quality={100}
          priority
          alt="Calendário simbolizando aplicação em funcionamento"
        />
      </Preview>
    </Container>
  )
}
