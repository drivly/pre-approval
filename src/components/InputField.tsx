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
}

const InputField = React.forwardRef<HTMLInputElement, InputProps & IProps>((props, ref) => {
  const { label, name, placeholder, type, errormsg, variant } = props
  return (
    <div className={`${variant} relative mb-6 flex flex-col`}>
      <label
        className='block font-lato text-sm font-semibold tracking-tight text-skin-label'
        htmlFor={name}>
        {label}
      </label>
      <input
        ref={ref}
        className='mt-0.5 h-[50px] rounded-[5px] border border-BORDER_DARK px-4 text-skin-base outline-none placeholder:text-skin-placeholder/60 focus:border-DRIVLY focus:ring-1 focus:ring-DRIVLY'
        type={type}
        autoComplete='on'
        placeholder={placeholder}
        {...props}
      />
      {errormsg && (
        <span className='absolute -bottom-5 right-0 font-lato text-xs font-black tracking-wider text-skin-warning'>
          {errormsg.toString()}
        </span>
      )}
    </div>
  )
})

export default InputField
InputField.displayName = 'InputField'
