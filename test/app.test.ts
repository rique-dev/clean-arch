import { isValidCpf } from '../src/app'

/**
 *
 * Testes
  1 - Não deve fazer um pedido com cpf inválido
  2 - Deve fazer um pedido com 3 itens (com descrição, preço e quantidade)
  3 - Deve fazer um pedido com cupom de desconto (percentual sobre o total do pedido)
 *
 */

const validCPFs = [
  '987.654.321-00',
  '334.504.660-11',
  '870.376.850-38',
  '92890487008',
]
const invalidCPFs = [
  '999.999.999-99',
  '123.456.789-10',
  '123123123',
  '870.376.85a-38',
]
describe('projeto - parte 1', () => {
  describe('Validando CPF', () => {
    const testValidCPF = it.each(validCPFs)
    const testInvalidCPF = it.each(invalidCPFs)

    testValidCPF('CPF %o Deve ser válido', cpf => {
      expect(isValidCpf(cpf)).toBeTruthy()
    })

    testInvalidCPF('CPF %o Deve ser inválido', cpf => {
      expect(isValidCpf(cpf)).toBeFalsy()
    })

    it('Não deve fazer um pedido com cpf inválido', () => {})

    it.todo('Deve fazer um pedido com cpf válido')
  })

  describe('Validar pedido', () => {
    it.todo(
      'Deve fazer um pedido com 3 itens (com descrição, preço e quantidade)'
    )
    it.todo(
      'Deve fazer um pedido com cupom de desconto (percentual sobre o total do pedido)'
    )
  })
})
