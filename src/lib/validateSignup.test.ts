import { describe, it, expect } from 'vitest'
import { validateSignup, type SignupValues } from './validateSignup'

const valid: SignupValues = {
  fullName: 'Aliya Nurlanovna',
  email: 'aliya@example.com',
  tickets: '2',
}

describe('validateSignup', () => {
  it('1. returns no errors when valid', () => {
    expect(validateSignup(valid, 10)).toEqual({})
  })

  it('2. fails when tickets is 0', () => {
    expect(validateSignup({ ...valid, tickets: '0' }, 10).tickets).toBe('Choose 1 to 4 tickets')
  })

  it('3. fails when tickets is 5', () => {
    expect(validateSignup({ ...valid, tickets: '5' }, 10).tickets).toBe('Choose 1 to 4 tickets')
  })

  it('4. fails when tickets is 1.5', () => {
    expect(validateSignup({ ...valid, tickets: '1.5' }, 10).tickets).toBe('Choose 1 to 4 tickets')
  })

  it('5. passes when tickets is 4', () => {
    expect(validateSignup({ ...valid, tickets: '4' }, 10)).toEqual({})
  })

  it('6. fails when tickets exceed seatsLeft', () => {
    expect(validateSignup({ ...valid, tickets: '3' }, 2).tickets).toBe('Only 2 seats left')
  })
})