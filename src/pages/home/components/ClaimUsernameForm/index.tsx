import { Button, TextInput } from '@ignite-ui/react'
import { Form } from './styles'
import { ArrowRight } from 'phosphor-react'

export function ClaimUsernameForm() {
  return (
    <Form as="form">
      <TextInput
        crossOrigin
        size="sm"
        prefix="ignite.com/"
        placeholder="seu-usuário"
      />
      <Button size="sm" type="submit">
        Reservar usuário
        <ArrowRight />
      </Button>
    </Form>
  )
}
