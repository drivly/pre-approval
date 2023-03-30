import React from 'react'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

interface IProps {
  name: string
  label: string
  errormsg?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>
  variant: string
  message?: string
}

const InputField = React.forwardRef<HTMLInputElement, InputProps & IProps>((props, ref) => {
  const { label, name, placeholder, type, errormsg, variant, message } = props
  return (
    <div className={`${variant} relative col-span-6 w-full`}>
      <label
        className={`${
          errormsg ? 'text-red-400' : 'text-gray-900'
        } block text-sm font-medium leading-6 `}
        htmlFor={name}>
        {label}
      </label>
      <div className='mt-2'>
        <input
          ref={ref}
          className={`${
            errormsg
              ? 'text-red-400 outline-none ring-2 ring-inset ring-red-400 focus:ring-2 focus:ring-inset focus:ring-red-400'
              : 'text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset'
          } block w-full rounded-md border-0 py-1.5 px-3 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6`}
          type={type}
          autoComplete='on'
          placeholder={placeholder}
          {...props}
        />
      </div>
      {errormsg && (
        <span className='absolute top-4 right-0 text-[11px] font-medium text-red-400'>
          {errormsg.toString()}
        </span>
      )}
      {message && (
        <span className='absolute -bottom-4 left-0.5 text-[9px] font-medium text-gray-800'>
          <span className='whitespace-nowrap'>{message}</span>
        </span>
      )}
    </div>
  )
})

export default InputField
InputField.displayName = 'InputField'
