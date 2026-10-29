export interface RegistrationValues {
  fullName: string
  email: string
  password: string
  confirmPassword: string
  acceptTerms: boolean
}

export type RegistrationErrors = Partial<Record<keyof RegistrationValues, string>>

export function validateRegistration(values: RegistrationValues): RegistrationErrors {
  const errors: RegistrationErrors = {}

  // 1. Full name validation
  if (!values.fullName || values.fullName.trim() === '') {
    errors.fullName = 'Full name is required'
  } else if (values.fullName.trim().length < 2) {
    errors.fullName = 'Full name must be at least 2 characters'
  }

  // 2. Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!values.email || values.email.trim() === '') {
    errors.email = 'Email is required'
  } else if (!emailRegex.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address'
  }

  // 3. Password validation
  if (!values.password) {
    errors.password = 'Password is required'
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters'
  }

  // 4. Confirm Password validation
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Please confirm your password'
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords do not match'
  }

  // 5. Terms acceptance validation
  if (!values.acceptTerms) {
    errors.acceptTerms = 'You must accept the terms and conditions'
  }

  return errors
}