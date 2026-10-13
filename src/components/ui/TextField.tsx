import { type InputHTMLAttributes } from 'react'

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label: string
  error?: string
}

export const TextField = ({
  id,
  label,
  error,
  className = '',
  ...props
}: TextFieldProps) => {
  const errorId = `${id}-error`

  return (
    <div className="flex flex-col gap-1 w-full text-left mb-4">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`w-full px-3 py-2 border rounded-lg text-sm transition-colors focus:outline-none ${
          error
            ? 'border-red-500 bg-red-50/30'
            : 'border-gray-300 focus:border-indigo-600'
        } ${className}`.trim()}
        {...props}
      />
      {error && (
        <span id={errorId} role="alert" className="text-xs text-red-600 font-medium mt-0.5">
          {error}
        </span>
      )}
    </div>
  )
}