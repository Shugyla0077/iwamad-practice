import { useState, type ChangeEvent, type FocusEvent, type FormEvent } from 'react'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { TextField } from '../components/ui/TextField'
import { validateRegistration, type RegistrationValues, type RegistrationErrors } from '../lib/validateRegistration'

const initialValues: RegistrationValues = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false,
}

export const RegisterPage = () => {
  const [values, setValues] = useState<RegistrationValues>(initialValues)
  const [touched, setTouched] = useState<Partial<Record<keyof RegistrationValues, boolean>>>({})
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  // Единый handleChange для всех типов инпутов (текст и чекбокс)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setValues((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  // Отслеживаем покидание поля пользователем
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name } = e.target
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }))
  }

  const errors: RegistrationErrors = validateRegistration(values)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)

    const currentErrors = validateRegistration(values)
    if (Object.keys(currentErrors).length === 0) {
      setIsSuccess(true)
    }
  }

  if (isSuccess) {
    return (
      <Card className="max-w-md w-full text-center p-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-green-600 mb-2">Success!</h2>
        <p className="text-gray-800 text-lg font-medium">
          Thanks, {values.fullName}. You are registered.
        </p>
      </Card>
    )
  }

  // Ошибка отображается только если поле touched или была попытка submit
  const getFieldError = (field: keyof RegistrationValues) => {
    return touched[field] || isSubmitted ? errors[field] : undefined
  }

  return (
    <Card className="max-w-md w-full p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold text-center mb-6 text-gray-800">
        Create an Account
      </h2>

      <form onSubmit={handleSubmit} noValidate>
        <TextField
          id="fullName"
          name="fullName"
          label="Full Name"
          type="text"
          placeholder="e.g. John Doe"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError('fullName')}
        />

        <TextField
          id="email"
          name="email"
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError('email')}
        />

        <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
          placeholder="At least 8 characters"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError('password')}
        />

        <TextField
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="Repeat your password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError('confirmPassword')}
        />

        <div className="flex flex-col text-left mb-6">
          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
            <input
              id="acceptTerms"
              name="acceptTerms"
              type="checkbox"
              checked={values.acceptTerms}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(getFieldError('acceptTerms'))}
              aria-describedby={getFieldError('acceptTerms') ? 'acceptTerms-error' : undefined}
              className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
            />
            <span>I accept the terms and conditions</span>
          </label>
          {getFieldError('acceptTerms') && (
            <span id="acceptTerms-error" role="alert" className="text-xs text-red-600 font-medium mt-1">
              {getFieldError('acceptTerms')}
            </span>
          )}
        </div>

        <Button type="submit" variant="primary" className="w-full py-2.5">
          Register
        </Button>
      </form>
    </Card>
  )
}