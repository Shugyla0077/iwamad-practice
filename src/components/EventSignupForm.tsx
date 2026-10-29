import { useState, type ChangeEvent, type FocusEvent, type FormEvent } from 'react'
import { TextField } from './ui/TextField'
import { Button } from './ui/Button'
import { validateSignup, type SignupValues } from '../lib/validateSignup'
import type { CampusEvent } from '../data/events'

const initialValues: SignupValues = {
  fullName: '',
  email: '',
  tickets: '1',
}

export const EventSignupForm = ({ event }: { event: CampusEvent }) => {
  const [seatsLeft, setSeatsLeft] = useState<number>(event.seats)
  const [values, setValues] = useState<SignupValues>(initialValues)
  const [touched, setTouched] = useState<Partial<Record<keyof SignupValues, boolean>>>({})
  const [submitAttempted, setSubmitAttempted] = useState<boolean>(false)
  const [bookedInfo, setBookedInfo] = useState<{ tickets: number; name: string } | null>(null)

  const errors = validateSignup(values, seatsLeft)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name } = e.target
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitAttempted(true)

    const currentErrors = validateSignup(values, seatsLeft)
    if (Object.keys(currentErrors).length === 0) {
      const ticketsCount = Number(values.tickets)
      const bookedName = values.fullName.trim()

      setSeatsLeft((prev) => prev - ticketsCount)
      setBookedInfo({ tickets: ticketsCount, name: bookedName })
      setValues({ fullName: '', email: '', tickets: '1' })
      setTouched({})
      setSubmitAttempted(false)
    }
  }

  const getFieldError = (field: keyof SignupValues) => {
    return touched[field] || submitAttempted ? errors[field] : undefined
  }

  return (
    <div className="mt-6 max-w-md w-full">
      <p>Seats left: {seatsLeft}</p>

      {bookedInfo && (
        <p role="status">
          Booked: {bookedInfo.tickets} for {bookedInfo.name}.
        </p>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <TextField
          id="fullName"
          name="fullName"
          label="Full name"
          type="text"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError('fullName')}
        />

        <TextField
          id="email"
          name="email"
          label="Email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError('email')}
        />

        <TextField
          id="tickets"
          name="tickets"
          label="Tickets"
          type="number"
          min={1}
          max={4}
          value={values.tickets}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError('tickets')}
        />

        <Button type="submit">Book</Button>
      </form>
    </div>
  )
}