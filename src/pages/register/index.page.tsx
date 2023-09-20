import { ArrowArcRight } from 'phosphor-react'
import { Container, Form, Header } from './styles'
import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'

export default function Register() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Bem-vindo ao Ignite Call</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={1} />
      </Header>

      <Form as="form">
        <label>
          <Text size="sm">Nome de usuário</Text>
          <TextInput
            crossOrigin
            prefix="ignite.com/"
            placeholder="seu-usuario"
          />
        </label>

        <label>
          <Text size="sm">Nome completo</Text>
          <TextInput crossOrigin placeholder="Seu nome" />
        </label>

        <Button type="submit">
          Próximo passo <ArrowArcRight />
        </Button>
      </Form>
    </Container>
  )
}
