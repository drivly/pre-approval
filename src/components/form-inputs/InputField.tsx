import { cn } from '@drivly/ui'
import { ExclamationCircleIcon } from '@heroicons/react/20/solid'

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
}

const InputField = React.forwardRef<HTMLInputElement, InputProps & IProps>((props, ref) => {
  const { label, name, placeholder, type, errormsg, variant } = props

  return (
    <div className={cn('relative col-span-6 h-fit w-full', variant)}>
      <label
        htmlFor={name}
        className={cn('block text-base font-medium leading-6 text-gray-900 sm:text-sm')}>
        {label}
      </label>
      <div className='relative mt-2 rounded-md shadow-sm'>
        <input
          ref={ref}
          type={type}
          className={cn(
            'block w-full rounded-md border-0 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-placeholder/50 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm',
            {
              'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500':
                errormsg,
            }
          )}
          aria-describedby={errormsg ? `${name}-error` : name}
          placeholder={placeholder}
          {...props}
        />
        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
          {errormsg && (
            <ExclamationCircleIcon className='h-5 w-5 text-red-500' aria-hidden='true' />
          )}
        </div>
      </div>

      {errormsg && (
        <p className='absolute mt-2 text-sm text-red-600' id={errormsg ? `${name}-error` : name}>
          {errormsg.toString()}
        </p>
      )}
    </div>
  )
})

export default InputField
InputField.displayName = 'InputField'
