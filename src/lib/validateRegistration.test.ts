import { describe, it, expect } from 'vitest'
import { validateRegistration, type RegistrationValues } from './validateRegistration'

const validValues: RegistrationValues = {
  fullName: 'Shugyla Zhambybay',
  email: 's_zhambibay@kbtu.kz',
  password: 'Password123',
  confirmPassword: 'Password123',
  acceptTerms: true,
}

describe('validateRegistration', () => {
  it('1. passes when all fields are valid', () => {
    const errors = validateRegistration(validValues)
    expect(errors).toEqual({})
  })

  it('2. fails when full name is empty', () => {
    const errors = validateRegistration({ ...validValues, fullName: '   ' })
    expect(errors.fullName).toBe('Full name is required')
  })

  it('3. fails when email is empty', () => {
    const errors = validateRegistration({ ...validValues, email: '' })
    expect(errors.email).toBe('Email is required')
  })

  it('4. fails when email format is invalid', () => {
    const errors = validateRegistration({ ...validValues, email: 'invalid-email' })
    expect(errors.email).toBe('Please enter a valid email address')
  })

  it('5. fails when password is shorter than 8 characters', () => {
    const errors = validateRegistration({ ...validValues, password: 'short' })
    expect(errors.password).toBe('Password must be at least 8 characters')
  })

  it('6. fails when confirmPassword is empty', () => {
    const errors = validateRegistration({ ...validValues, confirmPassword: '' })
    expect(errors.confirmPassword).toBe('Please confirm your password')
  })

  it('7. fails when confirmPassword does not match password', () => {
    const errors = validateRegistration({ ...validValues, confirmPassword: 'DifferentPassword' })
    expect(errors.confirmPassword).toBe('Passwords do not match')
  })

  it('8. fails when acceptTerms is false', () => {
    const errors = validateRegistration({ ...validValues, acceptTerms: false })
    expect(errors.acceptTerms).toBe('You must accept the terms and conditions')
  })
})