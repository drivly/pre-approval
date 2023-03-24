import React from 'react'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'


type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

interface IProps {
  name: string
  label: string
  errormsg: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>
  variant: any
  errorstyle?: string
}



const InputField = React.forwardRef<HTMLInputElement, InputProps & IProps>((props, ref) => {
  const { label, name, placeholder, type, errormsg, errorstyle, variant } = props
  return (
    <div className={`${variant} flex flex-col relative mb-6 mx-1`}>
      <label
        className='font-lato tracking-tight text-gray-700 block text-sm font-semibold'
        htmlFor={name}>
        {label}
      </label>
      <input
        ref={ref}
        className='outline-none placeholder:text-txtDisabledColor/50 focus:ring-1 focus:ring-DRIVLY mt-0.5 focus:border-DRIVLY h-[50px] px-4 border border-BORDER_DARK rounded-[5px]'
        type={type}
        autoComplete='on'
        placeholder={placeholder}
        {...props}
      />
      {errormsg && (
        <span className='font-lato text-xs font-black absolute -bottom-5 right-0 text-red-600/80 tracking-wider'>
          {errormsg.toString()}
        </span>
      )}
    </div>
  )
})

export default InputField
InputField.displayName = 'InputField'