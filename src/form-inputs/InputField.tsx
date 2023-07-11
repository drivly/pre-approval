import { cn } from '@utils'
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
          className={cn(
            'block h-[42px] w-full rounded-md border border-gray-300  px-3 text-gray-900 outline-none placeholder:text-[#8E8EA3]/50 focus:border-[2px] focus:border-DRIVLY sm:h-[38px] sm:text-sm',
            {
              'border-red-400 text-red-400 focus:border-red-400': errormsg,
            }
          )}
          type={type}
          // autoComplete='on'
          placeholder={placeholder}
          {...props}
        />
      </div>
      {errormsg && (
        <span className='absolute right-0 top-[1px] text-xs font-medium leading-6 tracking-tight text-red-400'>
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
